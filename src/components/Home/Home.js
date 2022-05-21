import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import CompanyEmployers from './CompanyEmployers';
import ContactUs from './ContactUs';
import Review from './Review';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <Review></Review>
            <BusinessSummary></BusinessSummary>
            <ContactUs></ContactUs>
            <CompanyEmployers></CompanyEmployers>
        </div>
    );
};

export default Home;