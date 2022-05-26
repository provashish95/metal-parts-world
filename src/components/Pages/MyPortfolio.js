import React from 'react';
import profile from '../../images/banner/profile.jpg';

const MyPortfolio = () => {
    return (
        <div className="container border my-5 py-3 shadow-lg">
            <div className="row my-5 ">
                <div className="col-sm-12 col-md-12 col-lg-12">
                    <div className='text-center mb-5'>
                        <img src={profile} alt="img-fluid" style={{ width: '200px', borderRadius: '50%' }} />
                        <h4 className=' mt-3'>Provashish Roy</h4>
                    </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-12">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <div className=''>
                                <p><span className='fw-bold'>Address:</span> Manikgonj, Dhaka</p>
                                <p><span className='fw-bold'>Email:</span> provashishroy95@gmail.com <span> <i class="fa-solid fa-envelope"></i></span></p>
                                <p><span className='fw-bold'>Phone:</span> (+88) 01632544810 <span><i class="fa-solid fa-phone-flip"></i></span></p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <div className='w-100 mx-auto'>
                                <p><span className='fw-bold'>Linkedin Link:</span> https://www.linkedin.com/in/provashish/</p>
                                <p><span className='fw-bold'>GitHub Link:</span> https://github.com/provashish95</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h5 className=' bg-dark text-white p-2' >Education</h5>
            <div className="row">
                <div className="col">
                    <p>BSc. in Computer Science and Engineering from Daffodil International University</p>
                    <p>HSC, Science (group) from Ghior DN Pilot high school</p>
                    <p>SSC, Science (group) from Ghior DN Pilot high school</p>
                </div>
            </div>
            <h5 className=' bg-dark text-white p-2' >Skills</h5>
            <ul>
                <li>JavaScript, ES6</li>
                <li>REST API</li>
                <li>React, React-Router, React Hook, React-Bootstrap, TailwindCss, daisyui</li>
                <li>HTML5, CSS3, Bootstrap-5/4</li>
                <li>Node js,MongoDB, Firebase, Express js, React-Firebase-Hook, SQL</li>
                <li>Redux, Laravel, Codeigniter</li>
                <li>Github, VS Code, Chrome Dev Tools, Heroku, Netlify, Postman, Photoshop, Figma</li>
                <li> JavaScript, C , C++, PHP</li>
            </ul>
            <h5 className=' bg-dark text-white p-2' >Projects</h5>
            <p className='fw-bold m-0 p-0'>Books Warehouse</p>
            <p className='m-0 p-0'><span className='fw-bold' >Website link:</span> https://books-warehouse-caee5.web.app/</p>
            <p className='m-0 p-0'><span className='fw-bold'>GitHub link:</span> https://github.com/provashish95/books-warehouse-</p>
            <p className='mb-3 p-0'>Fully responsive design and have authentication system
                Implement crud operation , users friendly </p>
            <p className='fw-bold m-0 p-0'>Gym Master</p>
            <p className='m-0 p-0'><span className='fw-bold' >Website link:</span> https://gym-master-c8470.web.app/</p>
            <p className='m-0 p-0'><span className='fw-bold'>GitHub link:</span> https://github.com/provashish95</p>
            <p className='mb-3 p-0'>Fully responsive website and protected routes with authentication.
                Only for single services website </p>
            <p className='fw-bold m-0 p-0'>Television Analyser</p>
            <p className='m-0 p-0'><span className='fw-bold'>Website link:</span>https://provashish95-television-analyser.netlify.app/</p>
            <p className='m-0 p-0'><span className='fw-bold'>GitHub link:</span>https://provashish95-television-analyser.netlify.app/</p>
            <p className='m-0 pb-5'>I developed the website where visitor see the blog related to their choice. Admin can
                post the topic. There is an admin panel for the admin. From the panel, admin can control the
                website.  </p>
        </div>
    );
};

export default MyPortfolio;