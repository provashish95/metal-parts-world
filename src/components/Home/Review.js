import { useQuery } from 'react-query';
import ReviewCard from './ReviewCard';


const Review = () => {

    const { data: reviews } = useQuery('review', () => fetch('http://localhost:5000/reviews').then(res => res.json()))


    return (
        <div className='container'>
            <h4 className='text-center enchant-color mb-5'>REVIEWS</h4>
            <div className="row py-4 my-4 transparent-bg">

                {
                    reviews?.map(review => <ReviewCard key={review._id} review={review}></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default Review;