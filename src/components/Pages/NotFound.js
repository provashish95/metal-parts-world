import React from 'react';
import notFoundImg from '../../images/notFound/404.jpg';

const NotFound = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col">
                    <img src={notFoundImg} className="img-fluid" alt="404" />
                </div>
            </div>
        </div>
    );
};

export default NotFound;