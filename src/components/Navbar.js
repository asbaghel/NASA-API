import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import { Router } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import { Tabs, Tab, Typography } from "@material-ui/core";

const onClickHandler = param => {
 
    // <NavLink to={`/${param}`}></NavLink>;
};
class Navbar extends Component {
  render() {
    return (
      <div>
        <AppBar >
          <Tabs value="all" centered="true" variant="fullWidth">
            <Tab
              value="Neo Browse"
              key="Neo Browse"
              label="Neo Browse"    
              href="/"
            >
              {"Neo Browse"}
            </Tab>
          
            <Tab
              value="closest approach date "
              key="closest approach date "
              label="closest approach date "
              
             
           
              href="/Datefeed"
            >
              {"Neo Browse"}
            </Tab>
            <Tab
              value="search a specific asteroid"
              key="search a specific asteroid"
              label="search a specific asteroid" 
           
              href="/search"
            >
              {"search a specific asteroid"}
            </Tab>
            
          </Tabs>
        </AppBar>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    );
  }
}

export default Navbar;
