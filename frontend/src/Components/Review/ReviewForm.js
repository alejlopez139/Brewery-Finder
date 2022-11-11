import { React } from 'react';
import { Control, Form, actions } from 'react-redux-form';
import StarRating from './StarRating';


function ReviewForm(props){

        function handleSubmit(review) {


            return(
                console.log(`${review.rating.key} /5 ${review.description}`)
            )
        }


    return(
        <Form 
        model='review'
        onSubmit={(review) => handleSubmit(review)}
        className='form'
        >
            <label htmlFor='review.description'>Leave a Review?:</label>
            <Control.textarea className='form--fields' model='review.description' id='review.description' />

            <label htmlFor='rating'>Leave a Rating?:</label>
            <Control
            model='rating'
            component={StarRating}
            />

            <button className='button-filled' type='submit'>Submit Review</button>

        </Form>
    )
}
export default ReviewForm