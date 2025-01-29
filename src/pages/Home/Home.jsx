import React from 'react';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import Slider from '../Slider/Slider';
import PropertiesType from '../PropertiesType/PropertiesType';
import ValuableClients from '../ValuableClients/ValuableClients';
import Footer from '../Footer/Footer';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div  className='max-w-6xl mx-auto mt-[-250px]'>
            <Header></Header>
            <Navbar></Navbar>
            <Banner></Banner>
            <PropertiesType></PropertiesType>
            <Slider></Slider>
            <ValuableClients></ValuableClients>
            <Footer></Footer>
        </div>
    );
};

export default Home;