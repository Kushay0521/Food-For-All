import React, { Component } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import aboutstyles from '../Components/AboutusPage.module.css';
// import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.js';


import safety from "../Images/safety.jpg";
import clock from "../Images/clock.png";
import customercare from "../Images/customercare.jfif";

const AboutusPage = () =>{
    return ( 
      <React.Fragment>
      <h1 className={aboutstyles.first}>About Us</h1>
        <div className="container">
            <h2 className={aboutstyles.title}>Our Services...</h2>
            <ul>
                <li>
                    <p>
                        Using this website, one can donate food to needy peoples and even one can donate cloth and vessel if one wants.Similarly, one can request food to needy peoples and even one can donate cloth and vessel if one wants.One can also join us as a volunteer to work with us.Volunteer willcolect the food or any donated items and will deliver to the allocated distribution area...   
                    </p>
                </li>
                <li>
                    <p>
                        In case of any query,
                        Please feel free to contact us even you can talk with us on our Toll-free no...
                    </p>
                </li>
            </ul>
      </div>
      <div className="container">
        <h2 className={aboutstyles.title}>What makes us different...</h2>
        <div className="row">
            <div className="col-md-4">
            <figure className={aboutstyles.figure , aboutstyles.fig1}>
                <img src={safety} className="figure-img img-fluid rounded" alt="..."/>
                <figcaption className={aboutstyles.figurecaption}>Quick Collection</figcaption>
            </figure>
            </div>
            <div className="col-md-4">
            <figure className={aboutstyles.figure , aboutstyles.fig2}>
                <img src={clock} className="figure-img img-fluid rounded" alt="..."/>
                <figcaption className={aboutstyles.figurecaption}>Quick Delivery</figcaption>
              </figure>
            </div>
            <div className="col-md-4">
            <figure className={aboutstyles.figure , aboutstyles.fig3}>
                <img src={customercare} className="figure-img img-fluid rounded" alt="..."/>
                <figcaption className={aboutstyles.figurecaption}>Requesting Donations</figcaption>
            </figure>
            </div>
        </div>
    </div>
    </React.Fragment>
    )
}


export default AboutusPage