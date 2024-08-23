import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Clients from './Clients';
import Cta from './Cta';

import Hero from './Hero';
import Intro from './Intro';
import Services from './Services';


const Home = () => {
    const navigate = useNavigate();
    useEffect(() => {
      if (localStorage.getItem("userInfo")) navigate("/Admindashboard");
    },[]);
  
    return (
        <>
            <Hero />
            <Intro />
            <Services />
            {/* <Portfolio /> */}
            <Clients />
            <Cta/>
          
        </>

    )
}

export default Home;

