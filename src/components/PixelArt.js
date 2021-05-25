import React from 'react'
import "./PixelArt.css"
import background from "../images/PinkBackground2.jpg"

function PixelArt() {
    return (
        <div className="pixelart"style={{backgroundImage:`url(${background})`}}>
            <h1>2D PIXEL ART</h1>
        </div>
    )
}

export default PixelArt
