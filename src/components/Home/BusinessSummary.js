import React from 'react';

const BusinessSummary = () => {
    return (
        <section className='bg-img'>
            <div className="container transparent-bg enchant-color ">

                <div className="row  py-5 px-2 justify-content-center align-items-center">
                    <div className="col-sm-12 col-md-6 col-lg-6  ">
                        <h2 className=' text-center'><i className="fas fa-chart-bar"></i> METAL PARTS WORLD  <i className="fas fa-chart-bar"></i></h2>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <p className='fs-5'><span><i className="fa-solid fa-circle-nodes"></i></span> <span>10+ years experience with customers and dealerships</span></p>
                        <p className='fs-5'><span><i className="fa-solid fa-circle-nodes"></i></span> <span>Experience based on hundreds of previous clients</span></p>
                        <p className='fs-5'><span><i className="fa-solid fa-circle-nodes"></i></span> <span>1000+ satisfied local clients </span></p>
                        <p className='fs-5'><span><i className="fa-solid fa-circle-nodes"></i></span> <span>Professional and individual communications to each client</span></p>
                        <p className='fs-5'><span><i className="fa-solid fa-circle-nodes"></i></span> <span>Our Company provide service world wide </span></p>
                    </div>
                </div>
                <div className="row align-items-center pb-5">
                    <div className="col-sm-6 col-md-3 col-lg-3">
                        <div className='text-center'>
                            <p className='fs-1'><i className="fa-solid fa-earth-americas"></i></p>
                            <p>100+ Countries</p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3 col-lg-3">
                        <div className='text-center'>
                            <p className='fs-1'><i className="fa-solid fa-people-group"></i></p>
                            <p>500+ Feedback</p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3 col-lg-3">
                        <div className='text-center'>
                            <p className='fs-1'><i className="fa-solid fa-comments"></i></p>
                            <p>1000+ Reviews</p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3 col-lg-3">
                        <div className='text-center'>
                            <p className='fs-1'><i className="fa-solid fa-truck"></i></p>
                            <p>500+ Delivery</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BusinessSummary;