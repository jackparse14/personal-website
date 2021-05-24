import React from 'react'
import {Button} from './Button'
import './Footer.css'
import {Link} from "react-scroll";

function Footer() { 
    return (
        <div className="footer-container">
            <section className="footer-contact">
                <p className="footer-contact-heading">
                    CONTACT ME
                </p>
                <p className="footer-contact-text">
                    You can unsubscribe at any time.
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" placeholder="Your Email" className="footer-input"/>
                        <Button buttonStyle="btn--outline">Subscribe</Button>
                    </form>
                </div>
            </section>
            <div class="footer-links">
                <div className="footer-link-wrapper">
                    <div class="footer-link-items">
                        <h2>Navigation</h2>
                        <Link to="hero-container">Home</Link>
                        <Link to="cards">Projects</Link>
                        <Link to="/sign-up">3D Modelling</Link>
                        <Link to="/sign-up">2D Pixel Art</Link>
                    </div>
                    <div class="footer-link-items">
                        <h2>About Us</h2>
                        <Link to="/sign-up">How it Works</Link>
                        <Link to="/sign-up">How it Works</Link>
                        <Link to="/sign-up">How it Works</Link>
                        <Link to="/sign-up">How it Works</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div class="footer-link-items">
                        <h2>About Us</h2>
                        <Link to="/sign-up">How it Works</Link>
                        <Link to="/sign-up">How it Works</Link>
                        <Link to="/sign-up">How it Works</Link>
                        <Link to="/sign-up">How it Works</Link>
                    </div>
                    <div class="footer-link-items">
                        <h2>Social Media</h2>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/jackparse14"><i class="fab fa-github"/> GitHub</a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UC0kZIFCOeBjJhGrxG5K8hjw"><i class="fab fa-youtube"/> Youtube</a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/jackparsecompsci/"><i class="fab fa-instagram"/> Instagram</a>
                        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/jackparse14"><i class="fab fa-twitter"/>Twitter</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer