import React, { useState, useEffect } from 'react';
import HeroSlider from './hero-slider/HeroSlider';
import CompanyIntro from './company-intro/CompanyIntro';
import CallToAction from '../calltoaction/CallToAction';
import ClientSlider from './ClientSlider/ClientSlider';
import { Helmet } from 'react-helmet-async';


const Home = () => {
  return (
    <>
     <Helmet>
            <title>IKA - Home</title>
            <meta name="description" content="IKA es una empresa mexicana especializada en consultoría y soporte de TI con más de 20 años de experiencia." />
          </Helmet>
    <HeroSlider/>
    <CompanyIntro/>
    <ClientSlider/>
    </>
  );
};

export default Home;