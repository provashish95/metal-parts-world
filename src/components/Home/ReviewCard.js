import React from 'react';

const ReviewCard = ({ review }) => {
    const { description, ratting } = review;
    const starRatting = parseInt(ratting);
    return (
        <div className="card mx-auto secondary-color shadow-lg p-3 mb-5  rounded" style={{ width: '18rem' }}>
            <div className="card-body text-color">
                <p className="card-text"><span className='fw-bold'>Customer says,</span> <span className='text-muted'>{description.slice(0, 70)}...</span></p>
                <p className="card-text"><span className=' me-1'>Ratting:</span>

                    {starRatting === 1 && <i class="fas fa-star"></i>}
                    {starRatting === 2 &&
                        <>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </>}
                    {starRatting === 3 &&
                        <>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </>}
                    {starRatting === 4 &&
                        <>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </>}
                    {starRatting === 5 &&
                        <>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </>}

                </p>
            </div>
        </div>
    );
};

export default ReviewCard;