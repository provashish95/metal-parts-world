import React from 'react';
import AboutCompany from './AboutCompany';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import ContactUs from './ContactUs';
import Review from './Review';
import Tools from './Tools';

const Home = () => {
    return (
        <div className='background-img'>
            <Banner></Banner>
            <Tools></Tools>
            <Review></Review>
            <BusinessSummary></BusinessSummary>

            <ContactUs></ContactUs>
            <AboutCompany></AboutCompany>


        </div>
    );
};

export default Home;