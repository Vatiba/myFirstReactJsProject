import React, { useEffect } from "react";
import "./App.css";
import NavbarContainer from "./Components/Navbar/NavbarContainer";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import { Route } from "react-router-dom";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import LoginContainer from "./Components/Login/LoginContainer";
import { connect } from "react-redux";
import { initializeApp } from "./Redux/appReducer";
import Preloader from "./Components/common/Preloader/Preloader";
import NoInternetConnection from "./Components/common/Warnings/NoInternetConnection";


import { Container, Grid, ThemeProvider, Box } from "@material-ui/core";
import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      dark: '#2e7031',
      main: '#43a047',
      light: '#68b36b',
    },
    secondary: {
      dark: '#47824a',
      main: '#66bb6a',
      light: '#84c887',
    }
  },
});

const App = (props) => {

  useEffect(() => {
    props.initializeApp();
  }, [])

  if (props.timeOut) {    
    return <ThemeProvider theme={theme}>
      <NoInternetConnection reset={props.initializeApp} />
    </ThemeProvider>
  }

  if (!props.initialized) {
    return <Preloader />;
  }


  return (
    // <div className="grid-system">
    //   <HeaderContainer />
    //   <Navbar />
    //   <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
    //   <Route path="/dialogs" render={() => <DialogsContainer />} />
    //   <Route path="/users" render={() => <UsersContainer />} />
    //   <Route path="/login" render={() => <LoginContainer />} />
    //   <Route path="/news" render={() => <News />} />
    //   <Route path="/music" render={() => <Music />} />
    //   <Route path="/settings" render={() => <Settings />} />
    // </div>
    <ThemeProvider theme={theme}>
      <HeaderContainer />
      <Container>

        <Box marginTop={3}>
          <Grid container>
            <Grid item md={3}>
              <NavbarContainer />
            </Grid>
            <Grid item xs={12} md={9} >
              <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
              <Route path="/messages/:dialogId?" render={() => <DialogsContainer />} />
              <Route path="/users" render={() => <UsersContainer />} />
              <Route path="/login" render={() => <LoginContainer />} />
              <Route path="/news" render={() => <News />} />
              <Route path="/music" render={() => <Music />} />
              <Route path="/settings" render={() => <Settings />} />
            </Grid>
          </Grid>
        </Box>

        



      </Container>
    </ThemeProvider>
  );
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
    timeOut: state.app.timeOut,
  };
};

export default connect(mapStateToProps, { initializeApp })(App);
