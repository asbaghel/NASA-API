import React from "react";
import logo from "./logo.svg";
import "./App.css";
import routes from "./routes";
import { Route, Link, Redirect, Switch, BrowserRouter } from "react-router-dom";
import Browse from "./components/Browse";
import Datefeed from "./components/Datefeed";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <BrowserRouter>
      <Switch>
       {routes.map((route)=>{
         return(

          <Route path={route.path} exact 
          render={()=><route.component/>}></Route>
         )
       })}
     </Switch>
      </BrowserRouter>
     

     
    </div>
  );
}

export default App;
