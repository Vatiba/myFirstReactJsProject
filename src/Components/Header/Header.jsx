import { Grid, Avatar, makeStyles, Paper, Box, Button, Typography, Container, IconButton, Tooltip } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  textColorGreen: {
    color: theme.palette.success.main,
  },
}));
const Header = (props) => {
  const classes = useStyles();
  return (
    // <header className={s.header}>
    //   <img src="https://cdn.pixabay.com/photo/2016/01/19/07/35/social-1148031_960_720.png" alt="pixabay" />
    //   <div>
    //     {
    //       props.isAuth ?
    //         <div>{props.login} - <button onClick={() => props.logout()}>Log out</button></div> 
    //         :
    //         <NavLink to="/login">Login</NavLink>
    //     }
    //   </div>
    // </header>
    <Paper square elevation={3}>
      <Container >
        <Grid container justifyContent="space-between">
          <Grid item>

            <Box p={1}>
              <Typography variant="h3" className={classes.textColorGreen}>
                Social
              </Typography>
              <Typography variant="body2" align="right">
                NETWORK
              </Typography>
            </Box>

          </Grid>
          <Grid item>
            {
              props.isAuth ?
                <Box paddingY={1}>
                  <Grid item container alignItems="center" spacing={1}>
                    <Grid item>
                      <Avatar className={classes.large} src="https://imagine-lab.enpc.fr/wp-content/uploads/EuDMTYL9805PPka2gquKHS7qh.png"></Avatar>
                      <Typography>{props.login}</Typography>
                    </Grid>
                    <Grid item>
                    <Tooltip title="Log out">
                      <IconButton onClick={() => props.logout()} fontSize="large" color="primary" aria-label="log out">
                        <ExitToAppIcon />
                      </IconButton>
                    </Tooltip>
                    </Grid>
                  </Grid>
                </Box>

                // <div>{props.login} - <button onClick={() => props.logout()}>Log out</button></div>
                :
                <Box paddingTop={3}>
                  <Button variant="contained" color="primary">
                    <NavLink to="/login" style={{ color: 'inherit' }}>Login</NavLink>
                  </Button>
                </Box>
            }
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
}
export default Header;