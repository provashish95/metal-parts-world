import React from 'react';
import { toast } from 'react-toastify';
import img from '../../images/banner/contact.jpg';

const ContactUs = () => {

    const handleButton = (event) => {
        event.preventDefault();
        toast.success('Sent your mail')
        event.target.reset();
    }
    return (
        <div className="container my-5">
            <h5 className='text-center enchant-color my-5 '>CONTACT US</h5>
            <div className="d-flex row py-5 align-items-center transparent-bg">
                <div className="col-sm-12 col-md-6 col-lg-6  px-5 order-2 order-lg-1 order-md-1 ">
                    <img src={img} className="img-fluid " alt="img" />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 px-5 mt-4 order-1 order-md-2 order-lg-2">
                    <form onSubmit={handleButton} className='mt-5'>
                        <div className="mb-3">
                            <input type="email" name="email" className="w-100 border border-dark secondary-color  py-2 px-2" id="exampleInputEmail" placeholder='Your Email' required />
                        </div>
                        <div className="form-floating mb-3">
                            <textarea name="description" className="form-style w-100 border secondary-color border-dark px-2" placeholder="Write Your Message" id="floatingTextarea2" style={{ height: '100px' }} required></textarea>
                        </div>
                        <button type="submit" className='btn btn-dark w-50 mx-auto d-block mb-5'>Sent</button>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default ContactUs;