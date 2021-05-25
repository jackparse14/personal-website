import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Footer from '../Footer';
import HeroSection from '../HeroSection';
import Modelling from '../Modelling';
import PixelArt from '../PixelArt';
import Projects from '../Projects';
import AboutMe from '../AboutMe';

function Home (){
    return(
        <>
            <HeroSection/>
            <AboutMe/>
            <Cards/>
            <Projects/>
            <Modelling/>
            <PixelArt/>
            <Footer/>
        </>
    );
}

export default Home;