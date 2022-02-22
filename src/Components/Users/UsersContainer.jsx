import React from 'react';
import { connect } from 'react-redux';
import { requestUsers, unFollow, follow, setCurrentPage } from '../../Redux/usersReducer';
import Users from './Users';
import { compose } from 'redux';
import Preloader from '../common/Preloader/Preloader';
import { getCurrentPage, getIsFetching, getIsFollowingProgress, getPageSize, getTotalItemsCount, getUsers } from '../../Redux/userSelectors';
import NoInternetConnection from '../common/Warnings/NoInternetConnection';

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    }

    onChangePage = (currentPage) => {
        // inside data.selected comes index of element therefore I increment here for make request to server
        // let selectedPage = data.selected + 1
        this.props.requestUsers(currentPage, this.props.pageSize);
    }


    render = () => {
        if (this.props.timeOut){
            return <NoInternetConnection reset={this.props.requestUsers} args={[this.props.currentPage, this.props.pageSize]}/>
        }
        return (
            <>
                {this.props.isFetching ? <Preloader /> : null}
                <Users key={this.props.id}
                    isFetching={this.props.isFetching}
                    totalPageCount={this.props.totalPageCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    users={this.props.users}
                    onChangePage={this.onChangePage}
                    follow={this.props.follow}
                    unFollow={this.props.unFollow}
                    isFollowingProgress={this.props.isFollowingProgress}
                    setCurrentPage={this.props.setCurrentPage}
                />
            </>
        )

    }
}


const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalPageCount: getTotalItemsCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        isFollowingProgress: getIsFollowingProgress(state),
        timeOut: state.usersPage.timeOut
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId));
//         },

//         unFollow: (userId) => {
//             dispatch(unFollowAC(userId));
//         },

//         setUsers: (data) => {
//             dispatch(setUsersAC(data));
//         },

//         setCurrentPage: (currentPage) => {
//             dispatch(setCurrentPageAC(currentPage));
//         },

//         setTotalPageCount: (totalPageCount) => {
//             dispatch(setTotalPageCountAC(totalPageCount));
//         },

//         setIsFetching: (isFetching) => {
//             dispatch(setIsFetchingAC(isFetching));
//         }

//     }
// }



export default compose(
    connect(mapStateToProps, { requestUsers, unFollow, follow, setCurrentPage }),
)(UsersContainer);