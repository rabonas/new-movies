import React from 'react'
import { Link } from 'react-router-dom'



const NotFound = () => {
    return (
        <>
        <div id="background"></div>
        <div class="top">
        <h1 className="error-title">404</h1>
        <h3 className="error-title_bottom">page not found</h3>
        </div>
        <div class="error-container">
        <div class="ghost-copy">
            <div class="one"></div>
            <div class="two"></div>
            <div class="three"></div>
            <div class="four"></div>
        </div>
        <div class="ghost">
            <div class="face">
            <div class="eye"></div>
            <div class="eye-right"></div>
            <div class="mouth"></div>
            </div>
        </div>
        <div class="shadow"></div>
        </div>
        <div class="bottom">
        <p className="error-text">Boo, looks like a ghost stole this page!</p>
        <div class="buttons">
            <Link to="/" class="btn">Home</Link>
        </div>
        </div>
        </>
        
    )
}

export default NotFound;