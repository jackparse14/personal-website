import React, {useState, useEffect} from 'react'
import {Link} from "react-scroll"
import { Button } from './Button';
import "./Navbar.css";

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton()
    }, []);

    window.addEventListener("resize", showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="hero-container" className="navbar-logo" onClick={closeMobileMenu}>
                    Jack_Parsons_<i class="fas fa-gamepad"/>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}/>
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className ="nav-item">
                            <Link to="hero-container" className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className ="nav-item">
                            <Link to="aboutme" className="nav-links" onClick={closeMobileMenu}>
                                About Me
                            </Link>
                        </li>
                        <li className ="nav-item">
                            <Link to="cards" className="nav-links" onClick={closeMobileMenu}>
                                Projects
                            </Link>
                        </li>
                        <li className ="nav-item">
                            <Link to="modelling" className="nav-links" onClick={closeMobileMenu}>
                                3D Modelling
                            </Link>
                        </li>
                        <li className ="nav-item">
                            <Link to="pixelart" className="nav-links" onClick={closeMobileMenu}>
                                2D Pixel Art
                            </Link>
                        </li>
                        <li className ="nav-item">
                            <Link to="footer-container" className="nav-links-mobile" onClick={closeMobileMenu}>
                                Contact Me
                            </Link>
                        </li>
                    </ul>
                    {button && <Link to="footer-container"><Button  buttonStyle="btn--outline">CONTACT ME</Button></Link>}
                </div>
            </nav>
        </>
    )
}

export default Navbar
