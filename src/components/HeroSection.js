import React from 'react'
import '../App.css'
import {Button} from './Button'
import './HeroSection.css';
import backgroundVideo from "../videos/background-video.mp4";

function HeroSection() {
    return (
        <div className="hero-container">
            
            <video src={backgroundVideo} autoPlay loop muted />
            <h1>Jack Parsons</h1>
            <p>Video Game Developer</p>
            <div className="hero-btns">
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
                    Curriculum Vitae
                </Button>
                <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">
                    Projects
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
