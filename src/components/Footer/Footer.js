import React from 'react';

const Footer = () => {
    let date = new Date().getFullYear();
    return (
        <footer className='primary-color'>
            <section className='container py-3'>
                <div className="row py-5 g-5">
                    <div className="col-sm-12 col-md-6 col-lg-4 ">
                        <p className='fw-bold mb-1'> <small >METAL PARTS WORLD</small></p>
                        <p>Metal parts world stores metal tool items and our customer knows that effective management is the difference between fulfilling <br />customer orders quickly and accurately while keeping costs down versus hearing <br />  complaints  about delayed  or inaccurate shipments and higher operating costs.</p>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4">

                        <p className='fw-bold mb-1'> <small >OVERVIEW</small></p>
                        <p className='mb-0'><small>About</small></p>
                        <p className='mb-0'><small>Career</small></p>
                        <p className='mb-0'><small>Press</small></p>
                        <p className='mb-0'><small>Contact</small></p>
                        <p className='mb-0'><small>Terms of use</small></p>
                        <p className='mb-0'><small>Privacy and policy</small></p>
                        <p className='mb-0'><small>Global Sitemap</small></p>
                        <p className='mb-0'><small>Local Sitemap</small></p>

                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 ">
                        <p className='fw-bold mb-1'> <small >COMMUNITY</small></p>
                        <p className='mb-0'><small>Community Center</small></p>
                        <p className='mb-0'><small>Support Center</small></p>
                        <p className='mb-0'><small>Help Center</small></p>
                        <p className='mb-0'><small>Do Not Sell Info</small></p>
                        <p className='fw-bold mb-1 mt-3'> <small >ADVERTISE</small></p>
                        <p className='mb-0'><small>Media Kit</small></p>
                        <p className='mb-0'><small>Contact</small></p>
                    </div>
                </div>
                <hr />
                <div className="row mb-5">
                    <div className="col-12 text-center">
                        <p>&copy; Copyright {date} | Metal Parts World</p>
                        <span className='mt-4'>
                            <i className="fa-brands fa-github icon-style"></i>
                            <i className="fa-brands fa-facebook icon-style"></i>
                            <i className="fa-brands fa-google icon-style"></i>
                            <i className="fa-brands fa-whatsapp icon-style"></i>
                            <i className="fa-brands fa-twitter icon-style"></i>
                        </span>
                    </div>
                </div>
            </section>
        </footer>
    );
};

export default Footer;