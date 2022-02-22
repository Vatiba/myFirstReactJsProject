import { ProfileAPI } from "../api/api";

const ADD_POST = "profile/ADD-POST";
const INCREMENT_LIKE = "profile/INCREMENT_LIKE";
const DECREMENT_LIKE = "profile/DECREMENT_LIKE";
const TOGGLE_IS_FETCHING = "profile/TOGGLE_IS_FETCHING";
const SET_USER_PROFILE = "profile/SET_USER_PROFILE";
const SET_STATUS = 'profile/SET_STATUS'
const SET_TIME_OUT = 'profile/SET_TIME_OUT';

let initialState = {
  posts: [
    { id: 1, userMessage: "Hey, why nobody love me?", likeCount: 5 },
    { id: 2, userMessage: "It's our new Program! Hey!", likeCount: 10 },
  ],
  profile: null,
  isFetching: true,
  status: "",
  timeOut: false,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let post = {
        id: 5,
        userMessage: action.newPost,
        likeCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, post],
      };
    }
    case INCREMENT_LIKE: {
      let stateCopy = { ...state };
      stateCopy.posts = [...state.posts];
      stateCopy.posts.forEach((element) => {
        if (element.id == action.id) {
          element.likeCount += 1;
        }
      });
      return stateCopy;
    }
    case DECREMENT_LIKE: {
      let stateCopy = { ...state };
      stateCopy.posts = [...state.posts];
      stateCopy.posts.forEach((element) => {
        if (element.id == action.id) {
          element.likeCount -= 1;
        }
      });
      return stateCopy;
    }

    case TOGGLE_IS_FETCHING: {
      return {
        ...state,
        isFetching: action.isFetching,
      };
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.data,
      };
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status
      }
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

export const addPostCreater = (newPost) => {
  return { type: ADD_POST, newPost };
};


export const incrementLikeCreater = (id) => {
  return { type: INCREMENT_LIKE, id: id };
};

export const decrementLikeCreater = (id) => {
  return { type: DECREMENT_LIKE, id: id };
};

export const setIsFetching = (isFetching) => {
  return { type: TOGGLE_IS_FETCHING, isFetching };
};

export const setUserProfile = (data) => {
  return { type: SET_USER_PROFILE, data };
};

export const setStatus = (status) => {
  return { type: SET_STATUS, status };
};

export const setTimeOutProfile = (timeOut) => {
  return { type: SET_TIME_OUT, timeOut };
};

export const getProfile = (userId) => async (dispatch) => {
  try {
    dispatch(setIsFetching(true));
    let responseProfile = await ProfileAPI.getProfile(userId);
    let responseStatus = await ProfileAPI.getStatus(userId)

    dispatch(setUserProfile(responseProfile.data));
    dispatch(setStatus(responseStatus.data))

    dispatch(setIsFetching(false));
    dispatch(setTimeOutProfile(false));
  }catch {
    dispatch(setTimeOutProfile(true));
  }

};

export const updateStatus = (status) => async (dispatch) => {
  try {
    let response = await ProfileAPI.updateStatus(status)
    dispatch(setStatus(status))
    dispatch(setTimeOutProfile(false));
  }catch {
    dispatch(setTimeOutProfile(true));
  }
}

export default profileReducer;
