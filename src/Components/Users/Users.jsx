import React from 'react';
import Paginator from '../common/Pagination/Paginator';
import User from './User';
import style from './User.module.css';

import { Box, Typography, Grid } from '@material-ui/core';

const Users = (props) => {
    return (
        <Box pl={{ md: 3}} pb={6} pt={1} className={props.isFetching ? style.hide : style.show}>
            <Grid container justifyContent="center">
                <Box pb={2}>
                    <Paginator onChangePage={props.onChangePage}
                        currentPage={props.currentPage}
                        pageSize={props.pageSize}
                        totalItemsCount={props.totalPageCount}
                        setCurrentPage={props.setCurrentPage}
                    />
                </Box>
            </Grid>
            
            {props.users.map((user) => {
                return (
                    <User isFollowingProgress={props.isFollowingProgress}
                        user={user}
                        follow={props.follow}
                        unFollow={props.unFollow}
                        key={user.id}
                    />
                );
            })
            }
        </Box>
    )
}



export default Users;