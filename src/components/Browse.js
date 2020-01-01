import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import "../App.css";

export default class Browse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentWillMount() {
    fetch(
      "https://api.nasa.gov/neo/rest/v1/neo/browse?page=0&size=10&api_key=VZ0ROhPQ3klG73Y33u0zYzrYBcc6KRYjH4aKZBAY"
    )
      .then(res => res.json())
      .then(data => {
        this.setState({ data: data.near_earth_objects });
      });
  }

  render() {
    return (
      <div>
        
       
        <div className="items ">
        <div className="left" >
                  {" "}
                  <b>ID</b>
                </div>
                <div className="right" >
                <b>NAME</b>
                </div>

        </div>
        
        {this.state.data.length != 0 ? (
          this.state.data.map(item => {
            return (
              <div key={item.id} className="items">
                
                <div className="left" >
                  {" "}
                  <b>{item.id}</b>
                </div>
                <div className="right" >
                  {item.name}
                </div>
              </div>
            );
          })
        ) : (
          <div>HI</div>
        )}
      </div>
    );
  }
}
