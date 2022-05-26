import { useQuery } from 'react-query';
import ReviewCard from './ReviewCard';


const Review = () => {

    const { data: reviews } = useQuery('review', () => fetch('http://localhost:5000/reviews').then(res => res.json()))


    return (
        <div className='container'>
            <div className="row">
                <h2 className='text-center'>Reviews</h2>
                {
                    reviews?.map(review => <ReviewCard key={review._id} review={review}></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default Review;