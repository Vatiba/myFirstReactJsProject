import { createSelector } from "reselect";

const getUsersSelector = (state) => {
  return state.usersPage.users;
};
export const getUsers = createSelector(getUsersSelector, (users) => {
  return users;
});

const getPageSizeSelector = (state) => {
    return state.usersPage.pageSize;
}
export const getPageSize = createSelector(getPageSizeSelector, (pageSize) => {
  return pageSize;
});

const getTotalItemsCountSelector = (state) => {
    return state.usersPage.totalItemsCount;
}
export const getTotalItemsCount = createSelector(getTotalItemsCountSelector, (totalItemsCount) => {
    return totalItemsCount;
});

const getCurrentPageSelector = (state) => {
    return state.usersPage.currentPage;;
}
export const getCurrentPage = createSelector(getCurrentPageSelector, (currentPage) => {
    return currentPage
});

const getIsFetchingSelector = (state) => {
    return state.usersPage.isFetching;
}
export const getIsFetching = createSelector(getIsFetchingSelector, (isFetching) => {
    return isFetching
});

const getIsFollowingProgressSelector = (state) => {
    return state.usersPage.isFollowingProgress;
}
export const getIsFollowingProgress = createSelector(getIsFollowingProgressSelector, (isFollowingProgress) => {
    return isFollowingProgress;
});
