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

export default NotFound

{/* // <Link to="/" target="_blank" className="not-page">
        //     <div>
        //     <div className="starsec"></div>
        //     <div className="starthird"></div>
        //     <div className="starfourth"></div>
        //     <div className="starfifth"></div>
        //     </div>


        //     <div className="lamp__wrap">
        //     <div className="lamp">
        //         <div className="cable"></div>
        //         <div className="cover"></div>
        //         <div className="in-cover">
        //         <div className="bulb"></div>
        //         </div>
        //         <div className="light"></div>
        //     </div>
        //     </div>
        //     <section className="error">
        //     <div className="error__content">
        //         <div className="error__message message">
        //         <h1 className="message__title">Page Not Found</h1>
        //         <p className="message__text">We're sorry, the page you were looking for isn't found here. The link you followed may either be broken or no longer exists. Please try again, or take a look at our.</p>
        //         </div>
        //         <div className="error__nav e-nav">
        //         <Link to="/" target="_blanck" className="e-nav__link"></Link>
        //         </div>
        //     </div>

        //     </section>
        // </Link> */}