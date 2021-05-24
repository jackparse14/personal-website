import React from 'react'
import {Button} from './Button'
import './Footer.css'
import {Link} from "react-scroll";

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the Adventure newsletter to receive our best vacation deals
                </p>
                <p className="footer-subscription-text">
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
                        <Link to="/sign-up">Home</Link>
                        <Link to="/sign-up">Projects</Link>
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
                        <Link to="/sign-up">GitHub</Link>
                        <Link to="/sign-up">Youtube</Link>
                        <Link to="/sign-up">Instagram</Link>
                        <Link to="/sign-up">Twitter</Link>
                    </div>
                </div>
            </div>
            <section class="social-media">
                <div class="social-media-wrap">
                    <div class="footer-logo">
                        <Link to="/" className="social-logo">
                            Jack_Parsons_<i class="fas fa-gamepad"/>
                        </Link>
                    </div>
                    <small className="website-rights">Jack Parsons © 2021</small>
                    <div className="social-icons">
                        <Link to="/" target="_blank" aria-label="GitHub" class="social-icon-link github">
                            <i class="fab fa-github"></i>
                        </Link>
                        <Link to="/" target="_blank" aria-label="Youtube" class="social-icon-link youtube">
                            <i class="fab fa-youtube"/>
                        </Link>
                        <Link to="/" target="_blank" aria-label="Instagram" class="social-icon-link instagram">
                            <i class="fab fa-instagram"/>
                        </Link>
                        <Link to="/" target="_blank" aria-label="Twitter" class="social-icon-link twitter">
                            <i class="fab fa-twitter"/>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer

