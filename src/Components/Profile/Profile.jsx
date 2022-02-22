import React from 'react';
import MyPostContainer from './MyPost/MyPostContainer';
import s from './Profile.module.css';
import MyPostInfoContainer from './MyPostInfo/MyPostInfoContainer';
import { Box } from '@material-ui/core';

const Profile = (props) => {
  return (
    <Box pl={{ md: 3, }}>
        <Box pb={5}>
          <MyPostInfoContainer />
          <MyPostContainer />
        </Box>
    </Box>
  )
}

export default Profile;