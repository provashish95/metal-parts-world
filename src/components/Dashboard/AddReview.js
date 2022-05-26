import React from 'react';
import { toast } from 'react-toastify';

const AddReview = () => {

    const handleUpdate = (event) => {
        event.preventDefault();
        const description = event.target.description.value;
        const productRatting = event.target.ratting.value;

        const ratting = parseInt(productRatting)

        if (ratting < 0 || ratting > 5) {
            toast.error('Please, ratting will be 1 to 5');
            return;
        } else {

            const review = {
                description: description,
                ratting: ratting
            }

            fetch('http://localhost:5000/reviews', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(review)
            })
                .then(res => res.json())
                .then(inserted => {
                    if (inserted.insertedId) {
                        toast.success('Review added successfully')
                        event.target.reset();
                    } else {
                        toast.error('Failed to add review!')
                    }
                })
        }


    }


    return (
        <div className='container'>
            <div className="row  my-5">
                <div className="col-12">
                    <form onSubmit={handleUpdate} className="w-75 mx-auto" >
                        <h5 className='text-center my-4'>Add  Review</h5>
                        <label className="form-label"> Write something (description)</label>
                        <div className="mb-3">
                            <textarea name="description" className="w-100 " placeholder='Description' required></textarea>
                        </div>
                        <label className="form-label">Add ratting (1 to 5 )</label>
                        <div className="mb-3">
                            <input type="number" name="ratting" className="w-100 p-1" placeholder='1 to 5 ' required />
                        </div>
                        <button type="submit" className='btn btn-dark w-50 mx-auto d-block mb-5' >Add Review</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddReview;