import React from 'react';
import { connect } from "react-redux";
import Navbar from './Navbar';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';


const NavbarContainer = (props) => {

  return (
    <Navbar {...props} />
  )

}


const mapStateToProps = (state) => {
  return {};
}




export default compose(connect(
  mapStateToProps, {}), 
  withRouter)(NavbarContainer);