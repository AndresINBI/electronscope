import React from 'react'
// Styles
import './LandingPage.scss'
// Assets
import landingSVG from '../../assets/png/landingPage.png'

export default function LandingPage() {
  return (
    <div className="main">
      <div className="background_container">
        <img src={landingSVG} alt="Landing Image" className="background_img" />
      </div>
      <div className="headline_container">
        <h1>Modern oscilloscope using Arduino</h1>
      </div>
      <div className="button_container">
        <a className="button-start">Start</a>
      </div>
      {/* <div className="wave_container">
        <div className="wave -one"></div>
        <div className="wave -two"></div>
        <div className="wave -three"></div>
      </div> */}
    </div>
  )
}
