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
            <div class="hero-btns-social-media">
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/jackparse14"><i class="fab fa-github"/></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UC0kZIFCOeBjJhGrxG5K8hjw"><i class="fab fa-youtube"/></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/jackparsecompsci/"><i class="fab fa-instagram"/></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/jackparse14"><i class="fab fa-twitter"/></a>
            </div>
        </div>
    )
}

export default HeroSection
