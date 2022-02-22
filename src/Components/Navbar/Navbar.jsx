import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';
import { Grid, Paper, Box, Button, Typography, Container, IconButton } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import MessageIcon from '@material-ui/icons/Message';
import GroupIcon from '@material-ui/icons/Group';
import {AppBar, BottomNavigation, BottomNavigationAction} from '@material-ui/core';


const MenuButton = ({component, to, fullWidth, setValuebutton, valuebutton, ...props}) => {
  let clicked = props.pathName === props.text.toLowerCase()

  return (
    <Button component={component} to={to} fullWidth={fullWidth} >
      <Grid container alignItems="center" spacing={2}>
        <Grid item>
          {props.icon}
        </Grid>
        <Grid item>
          <Typography color={clicked ? 'primary' : 'textPrimary'}>{props.text}</Typography>
        </Grid>
      </Grid>
    </Button>
  )
}

const BottomNavbar = ({setValuebutton, pathName}) => {

  let value;
  switch(pathName){
    case 'profile':
      value = 0;
      break;
    case 'messages':
      value = 1;
      break
    case 'users':
      value = 2;
      break
    default:
      value = 0;
  }

  return (
    <Box display={{ xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' }}>
      <AppBar position="fixed" color="primary" style={{top: "auto", bottom: 0}}>
        <BottomNavigation
          value={value}
          showLabels
        >
          <BottomNavigationAction component={NavLink} to="/profile" label="Profile" icon={<PersonIcon />} />
          <BottomNavigationAction component={NavLink} to="/messages" label="Messages" icon={<MessageIcon />} />
          <BottomNavigationAction component={NavLink} to="/users" label="Users" icon={<GroupIcon />} />
        </BottomNavigation>
      </AppBar>
    </Box>
  )
}


const Navbar = (props) => {

  let pathName = props.location.pathname.replace('/', '')



  return (
      // <nav className={s.nav}>
      //   <div className={s.navItem}>
      //     <NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
      //   </div>
      //   <div className={s.navItem}>
      //     <NavLink to='/dialogs' activeClassName={s.active}>Messages</NavLink>
      //   </div>
      //   <div className={s.navItem}>
      //     <NavLink to='/users' activeClassName={s.active}>Users</NavLink>
      //   </div>
      //   <div className={s.navItem}>
      //     <NavLink to='/news' activeClassName={s.active}>News</NavLink>
      //   </div>
      //   <div className={s.navItem}>
      //     <NavLink to='/music' activeClassName={s.active}>Music</NavLink>
      //   </div>
      //   <div className={`${s.navItem} ${s.navSetting}`}>
      //     <NavLink to='/settings' activeClassName={s.active}>Settings</NavLink>
      //   </div>
      // </nav>
      <>

      <Box display={{ xs: 'none', sm: 'none', md: 'block' }}>
        <Paper elevation={4}>

          <Box paddingX={1} paddingY={2}>

            <Box paddingX={1} paddingBottom={1}>
              <Typography variant="h6">Menu</Typography>
            </Box>

            
            <MenuButton text="Profile" icon={<PersonIcon color="primary"/>} pathName={pathName} component={NavLink} to="/profile" fullWidth />
            <MenuButton text="Messages" icon={<MessageIcon color="primary"/>} pathName={pathName} component={NavLink} to="/messages" fullWidth />
            <MenuButton text="Users" icon={<GroupIcon color="primary"/>} pathName={pathName} component={NavLink} to="/users" fullWidth />

          </Box>
        </Paper>
      </Box>
      
      <BottomNavbar pathName={pathName} />
      
      </>
  )
}

export default Navbar;