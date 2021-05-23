import React from 'react'
import CardItem from './CardItem'
import "./Cards.css"
import image1 from "../images/FirePlatformer.jpg"
import image2 from "../images/AchievementSystem.jpg"
import image3 from "../images/ColourCombine.jpg"
import image4 from "../images/TDPlantGame.jpg"
import image5 from "../images/LaserDefender.jpg"
import background from "../images/PurpleBackground2.jpg"

function Cards() {
    return (
        <div className="cards" style={{backgroundImage:`url(${background})`}}>
            <h1>PROJECTS</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src={image1}
                        text="JavaScript game built using the Phaser 3 game engine"
                        label="Fire Platformer"
                        path="/services"
                        />
                        <CardItem 
                        src={image2}
                        text="C++ Achievement System with a game demo built using the xCube2D game engine"
                        label="Achievement System & Demo"
                        path="/services"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        src={image3}
                        text="Unreal Engine 4 game based around merging different coloured cubes"
                        label="Colour Combine"
                        path="/services"
                        />
                        <CardItem 
                        src={image4}
                        text="From a course I took in the Unity game engine over the summer (not my game)"
                        label="TD Plant Game"
                        path="/services"
                        />
                        <CardItem 
                        src={image5}
                        text="From a course I took in the Unity game engine over the summer (not my game)"
                        label="Laser Defender"
                        path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;
