import React, { useState, useEffect } from 'react';
import HeroSlider from './hero-slider/HeroSlider';
import CompanyIntro from './company-intro/CompanyIntro';
import CallToAction from '../calltoaction/CallToAction';


const Home = () => {
  return (
    <>
    <HeroSlider/>
    <CompanyIntro/>
    <CallToAction/>
    </>

  );
};

export default Home;