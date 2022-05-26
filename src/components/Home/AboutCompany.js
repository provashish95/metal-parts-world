import React from 'react';

const AboutCompany = () => {
    return (
        <div className="container py-5">
            <h4 className='text-center enchant-color'>ASK  QUERY </h4>
            <div className="row my-5 transparent-bg py-3">
                <div className="col">
                    <div className="accordion accordion-flush" id="accordionFlushExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header " id="flush-headingOne">
                                <button className="accordion-button collapsed secondary-color" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    What type of service provide ?
                                </button>
                            </h2>
                            <div id="flush-collapseOne" className="accordion-collapse collapse secondary-color" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">We provide two way services one is online and other is manually </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingTwo">
                                <button className="accordion-button collapsed secondary-color" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    Product delivery system ?
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" className="accordion-collapse collapse secondary-color" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Metal parts have own vehicle for delivery  </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingThree">
                                <button className="accordion-button collapsed secondary-color" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    Have any shop / address ?
                                </button>
                            </h2>
                            <div id="flush-collapseThree" className="accordion-collapse collapse secondary-color" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Yes we have many sub center shop in our country but our main office is dhanmondi -32, sukrabad, dhaka</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutCompany;