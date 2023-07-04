import "./navigation.css"
import React, { Fragment } from 'react'
import Logo from "../assets/movie-logo.png"
import Avatar from "../assets/sample-avatar.png"
import {
    BrowserRouter as Router,
    Link,
    Route, Switch, Outlet
} from "react-router-dom"
export default function Navigaiton() {
  return (
    <Fragment>
      <div className="navigation">
        <div className="logo">
            <Link to="/movie-corn"><img src={Logo}></img></Link>
        </div>
        
        <div className="user-link">
                <div className="user-avatar-container">
                <img src={Avatar} clsassName="user-avatar"></img>
                </div>   
        </div>
        
    </div>
    <Outlet/>
    </Fragment>
    
  )
}
