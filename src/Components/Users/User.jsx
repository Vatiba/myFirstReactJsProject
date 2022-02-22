import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './User.module.css';

import { Box, Grid, Avatar, Button, makeStyles, Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	root: {
		minWidth: '200px',
		maxWidth: '500px',
		minHeight: '75px',
		maxHeight: '150px',
	},
	small: {
		width: theme.spacing(7),
		height: theme.spacing(7),
	},
}));

const FollowUnfollowBtn = ({ followed, follow, unFollow, userId, isFollowingProgress }) => {
	return (
		<Button disabled={isFollowingProgress.some(id => id === userId)}
			style={{ width: '120px' }}
			variant="contained"
			color="primary"
			onClick={() => { followed ? unFollow(userId) : follow(userId) }}>
			{
				followed ? 'Un follow' : 'Follow'
			}
		</Button>

	)
}
const InfoUser = (props) => {
	return (
		<Grid container spacing={1}>
			<Grid item>
				<Box fontWeight="fontWeightBold" component="span">
					{props.infoName}
				</Box>
			</Grid>
			<Grid item>
				{props.text}
			</Grid>
		</Grid>
	)
}


const User = ({ user, ...props }) => {
	const classes = useStyles();
	return (
		<Box pb={2} mb={1}>
			<Paper elevation={2}>
				<Box p={2}>
					<Grid container spacing={2} alignItems="center">
						<Grid item>
							<Grid container direction='column' alignItems="center" spacing={1}>
								<Grid item>
									<NavLink to={`/profile/${user.id}`}>
										<Avatar className={classes.small} src={user.photos.small != null ?
											user.photos.small : "https://imagine-lab.enpc.fr/wp-content/uploads/EuDMTYL9805PPka2gquKHS7qh.png"} alt="avatar" />
									</NavLink>
								</Grid>
								<Grid item>
									<FollowUnfollowBtn
										followed={user.followed}
										follow={props.follow}
										unFollow={props.unFollow}
										userId={user.id}
										isFollowingProgress={props.isFollowingProgress} />
								</Grid>
							</Grid>
						</Grid>
						<Grid item>
							<InfoUser infoName='Name:' text={user.name} />
							<InfoUser infoName='Country:' text={'user.location.country'} />
							<InfoUser infoName='City:' text={'user.location.city'} />
							<InfoUser infoName='Status:'
								text={user.status != null ? user.status : "status"} />


						</Grid>
					</Grid>
				</Box>
			</Paper>
		</Box>
		// <div className={style.wrapper}>
		//     <div className={`${style.dFlex}`}>
		//         <div className={`${style.dFlex} ${style.flexColumn} ${style.alignItemCenter}`}>
		//             <NavLink to={`/profile/${user.id}`}>
		//                 <img className={style.avatar} src={user.photos.small != null ?
		//                     user.photos.small : "https://imagine-lab.enpc.fr/wp-content/uploads/EuDMTYL9805PPka2gquKHS7qh.png"} alt="avatar" />
		//             </NavLink>
		//             {user.followed ?
		//                 <button disabled={props.isFollowingProgress.some(id => id === user.id)} className={`${style.sendBtn}`} onClick={() => {
		//                     props.unFollow(user.id)
		//                 }}>Unfollow</button>
		//                 :
		//                 <button disabled={props.isFollowingProgress.some(id => id === user.id)} className={`${style.sendBtn}`} onClick={() => {
		//                     props.follow(user.id)
		//                 }}>Follow</button>
		//             }
		//         </div>
		//         <div className={`${style.messageText} ${style.dFlex} ${style.flexColumn} ${style.justifyContentSpaceBetween}`}>
		//             <div className={`${style.dFlex} ${style.justifyContentSpaceBetween}`}>
		//                 <div>{user.name}</div>
		//                 <div>{'user.location.country'}</div>
		//             </div>
		//             <div className={`${style.dFlex} ${style.justifyContentSpaceBetween}`}>
		//                 <div>{user.status != null ?
		//                     user.status
		//                     :
		//                     "status"}</div>
		//                 <div>{'user.location.city'}</div>
		//             </div>
		//         </div>
		//     </div>
		// </div>
	);
}



export default User;