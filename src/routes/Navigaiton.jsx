import "./navigation.css"
import React, { Fragment } from 'react'
import Logo from "../assets/movie-logo.png"
import Avatar from "../assets/sample-avatar.png"
import PrimaryButton from "../components/PrimaryButton.component"
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
            <Link to="/movie-corn"><img src={Logo} alt="logo movie corn"></img></Link>
        </div>
        
        <div className="user-link">
                {/* <div className="user-avatar-container">
                <img src={Avatar} alt="avatar" clsassName="user-avatar"></img>
                </div>  */}
                <div className="btn-container">
                  <Link to="/log-in">
                  <button className='secondary-btn'>
                  Log In
                  </button>
                  </Link>
                
                {/* <button className='secondary-btn'>Sign Up</button> */}
                </div>
                
        </div>
        
    </div>
    <Outlet/>
    </Fragment>
    
  )
}
