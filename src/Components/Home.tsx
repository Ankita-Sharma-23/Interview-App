import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
    return (
        <div>
              <div className="container">
            <br></br><br></br>
            <h2>Hello User....</h2>
            <br></br><br></br>
            Welcome to Interview Portal
            <br></br><br></br>
            Before starting Login here.
            <br></br><br></br>
            <Link to="/login" className="links">Click here</Link> for Login...
            <br></br><br></br><br></br>
            </div>
        </div>
    )
}
