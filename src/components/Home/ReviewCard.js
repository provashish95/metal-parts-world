import React from 'react';

const ReviewCard = ({ review }) => {
    const { description, ratting } = review;
    return (
        <div className="card mx-auto shadow-lg p-3 mb-5 bg-body rounded" style={{ width: '18rem' }}>
            <div className="card-body text-color">
                <p className="card-text">{description.slice(0, 70)}...</p>
                <p className="card-text"><span className='fw-bold'>Ratting:</span> {ratting} $</p>
            </div>
        </div>
    );
};

export default ReviewCard;