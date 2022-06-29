import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';

const Home = () => {

  return (
    <>
      <Hero className="illustration-section-01" id='home' />
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" id='works'/>
      <Testimonial topDivider id='aboutme'/>
    </>
  );
}

export default Home;
