import React, { Component } from "react";
import { fireEvent } from "@testing-library/react";


export default class Datefeed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      StartDate: "",
      EndDate: "",
      objdata: {},
      data: []
    };
  }
  onChange = e => this.setState({ [e.target.name]: e.target.value });
  onSubmit = e => {
    e.preventDefault();
    fetch(
      `https://api.nasa.gov/neo/rest/v1/feed?start_date=${this.state.StartDate}&end_date=${this.state.EndDate}&api_key=VZ0ROhPQ3klG73Y33u0zYzrYBcc6KRYjH4aKZBAY`
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({ objdata: data.near_earth_objects });
        this.setState({ data: Object.entries(data.near_earth_objects) });
        console.log(this.state.data);
      });

    this.setState({ title: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
          <label className="left">Starting Date:</label>
          <input
          className="left"
            type="text"
            name="StartDate"
            value={this.state.StartDate}
            onChange={this.onChange}
            placeholder="Start Date"
           
          ></input>

          <label className="right">End Date:</label>
          <input
          className="right"
            type="text"
            name="EndDate"
            value={this.state.EndDate}
            onChange={this.onChange}
            placeholder="End Date"
           
          ></input>
          <input
          className="right"
            type="submit"
            value="submit"
            className="btn"
          
          ></input>
        </form>

        {this.state.data.length != 0 ? (
          this.state.data.map(item => {
            return (
              <div>
                <div className="left date" >{item[0]}</div>
                <br></br>
                <div>
                  {item[1].map(item => {
                    return (
                      <div key={item.id} className="items">
                        <div className="left">
                          {" "}
                          <b>{item.id}</b>
                        </div>
                        <div className="right">{item.name}</div>
                       
                      </div>
                     
                    );
                  })}
                </div>
              </div>
            );
          })
        ) : (
          <div>Please Enter Date in YYYY-MM-DD format</div>
        )}
      </div>
    );
  }
}
