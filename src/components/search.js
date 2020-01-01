import React, { Component } from 'react'

export default class search extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             id:"",
             objdata:{}
        }
    }
    onChange = e => this.setState({ id: e.target.value });
    onSubmit = e => {
        e.preventDefault();
        fetch(
          `https://api.nasa.gov/neo/rest/v1/neo/${this.state.id}?api_key=VZ0ROhPQ3klG73Y33u0zYzrYBcc6KRYjH4aKZBAY`
        )
          .then(res => res.json())
          .then(data => {
            console.log(data);
            this.setState({ objdata: data });
           
        
          }).catch(err=>console.log(err));
    
       
      };

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
          
          <input
          className="left"
            type="number"
            name="id"
            value={this.state.id}
            onChange={this.onChange}
            placeholder="Enter ID"
           
          ></input>

          
          <input
          className="right"
            type="submit"
            value="Search"
            className="btn"
          
          ></input>
        </form>
        <br></br>
        <br></br>

{Object.entries(this.state.objdata).length === 0 && this.state.objdata.constructor === Object?<div> Enter ID</div>: <div key={this.state.objdata.id} className="items">
                        <div className="left">
                          {" "}
                          <b>{this.state.objdata.id}</b>
                        </div>
                        <div className="right">{this.state.objdata.name}</div>
                       
                      </div>}


            </div>
        )
    }
}
