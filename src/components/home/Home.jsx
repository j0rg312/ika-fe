import React, { useState, useEffect } from 'react';
import HeroSlider from './hero-slider/HeroSlider';
import CompanyIntro from './company-intro/CompanyIntro';
import CallToAction from '../calltoaction/CallToAction';
import ClientSlider from './ClientSlider/ClientSlider';


const Home = () => {
  return (
    <>
    <HeroSlider/>
    <CompanyIntro/>
    <ClientSlider/>
    </>

  );
};

export default Home;