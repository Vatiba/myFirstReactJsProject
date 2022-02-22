import { FollowAPI, UsersAPI } from "../api/api";
import { updateObjectInArray } from "../utilities/object-helpers"

const FOLLOW = "users/FOLLOW";
const UNFOLLOW = "users/UNFOLLOW";
const SET_USERS = "users/SET_USERS";
const SET_CURRENT_PAGE = "users/SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "users/SET_TOTAL_COUNT";
const SET_IS_FETCHING = "users/SET_IS_FETCHING";
const SET_IS_FOLLOWING_PROGRESS = "users/SET_IS_FOLLOWING_PROGRESS";
const SET_TIME_OUT = 'users/SET_TIME_OUT';

let initialState = {
  users: [],
  currentPage: 1,
  totalItemsCount: 0,
  pageSize: 4,
  isFetching: false,
  isFollowingProgress: [],
  timeOut: false,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: updateObjectInArray(state.users, 'id', action.userId, { followed: true })
        // users: state.users.map((user) => {
        //   if (user.id === action.userId) {
        //     return { ...user, followed: true };
        //   }
        //   return user;
        // }),
      };
    }
    case UNFOLLOW: {
      return {
        ...state,
        users: updateObjectInArray(state.users, 'id', action.userId, { followed: false })
        // users: state.users.map((user) => {
        //   if (user.id == action.userId) {
        //     return { ...user, followed: false };
        //   }
        //   return user;
        // }),
      };
    }
    case SET_USERS: {
      return {
        ...state,
        users: action.data,
      };
    }
    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.currentPage,
      };
    }
    case SET_TOTAL_COUNT: {
      return {
        ...state,
        totalItemsCount: action.totalItemsCount,
      };
    }
    case SET_IS_FETCHING: {
      return {
        ...state,
        isFetching: action.isFetching,
      };
    }
    case SET_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        isFollowingProgress: action.isFollowingProgress
          ? [...state.isFollowingProgress, action.userId]
          : state.isFollowingProgress.filter((id) => id != action.userId),
      };
    }
    case SET_TIME_OUT: {
      return {
        ...state,
        timeOut: action.timeOut,
      };
    }
    default:
      return state;
  }
};

export const followSuccess = (userId) => {
  return { type: FOLLOW, userId: userId };
};

export const unFollowSuccess = (userId) => {
  return { type: UNFOLLOW, userId: userId };
};

export const setUsers = (data) => {
  return { type: SET_USERS, data: data };
};

export const setCurrentPage = (currentPage) => {
  return { type: SET_CURRENT_PAGE, currentPage };
};

export const setTotalCount = (totalItemsCount) => {
  return { type: SET_TOTAL_COUNT, totalItemsCount };
};

export const setIsFetching = (isFetching) => {
  return { type: SET_IS_FETCHING, isFetching };
};

export const setIsFollowingProgress = (isFollowingProgress, userId) => {
  return { type: SET_IS_FOLLOWING_PROGRESS, isFollowingProgress, userId };
};

export const setTimeOutProfile = (timeOut) => {
  return { type: SET_TIME_OUT, timeOut };
};



export const requestUsers = (currentPage, pageSize) => async (dispatch) => {
  try {
    dispatch(setIsFetching(true));
    dispatch(setCurrentPage(currentPage));

    let response = await UsersAPI.getUsers(currentPage, pageSize)

    dispatch(setIsFetching(false));
    dispatch(setUsers(response.data.items));
    dispatch(setTotalCount(response.data.totalCount));
    dispatch(setTimeOutProfile(false));
  }catch {
    dispatch(setTimeOutProfile(true));
  }

};




const followUnFollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
  try {
    dispatch(setIsFollowingProgress(true, userId));

    let response = await apiMethod(userId);

    if (response.data.resultCode === 0) {
      dispatch(actionCreator(userId));
    }
    dispatch(setIsFollowingProgress(false, userId));
    dispatch(setTimeOutProfile(false));
  }catch {
    dispatch(setTimeOutProfile(true));
  }
}

export const unFollow = (userId) => async (dispatch) => {
  followUnFollowFlow(dispatch, userId, FollowAPI.unFollow, unFollowSuccess)
};

export const follow = (userId) => async (dispatch) => {
  followUnFollowFlow(dispatch, userId, FollowAPI.follow, followSuccess)
};

export default usersReducer;
