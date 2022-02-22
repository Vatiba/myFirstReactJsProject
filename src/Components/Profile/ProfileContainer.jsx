import React, { useEffect } from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getProfile } from '../../Redux/profileReducer';
import { Redirect, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import Preloader from '../common/Preloader/Preloader';
import NoInternetConnection from '../common/Warnings/NoInternetConnection';

const ProfileContainer = (props) => {
  let userId = !props.match.params.userId ? props.authUserId : props.match.params.userId;
  useEffect(() => {
    if (userId) {
      props.getProfile(userId);
    }
  }, [userId]);

  if (props.profilePage.timeOut){
    return <NoInternetConnection reset={props.getProfile} args={[userId]} />
  }

  if (!userId){
    return <Redirect to='/login' />
  }
  else if (props.profilePage.isFetching){
    return <Preloader />
  }
  return (
    <Profile />
  )
}

let mapStateToProps = (state) => {
  return {
    authUserId: state.auth.authUserId,
    profilePage: state.profilePage
  }
}

export default compose(
  connect(mapStateToProps, { getProfile }),
  withRouter,
)(ProfileContainer);