import axios from 'axios';
import React, { useState, useEffect, createRef } from 'react';
import { Control, Form, actions } from 'react-redux-form';
import { baseUrl } from '../../Shared/baseUrl';
import BeerCard from './BeerCard';

import './BeerForm.css'

function BeerForm(props) {
    const [beerData, setBeerData] = useState({})
    function handleSubmit(beer) {
        /**
         * Do whatever you like in here.
         * If you connect the UserForm to the Redux store,
         * you can dispatch actions such as:
         * dispatch(actions.submit('user', somePromise));
         * etc.
         * 
         * This is where the logic to add the beer to the database
         * will go. The POST request
        **/
        axios.post(baseUrl, {
            data: JSON.stringify(beer)
        })
        .then(res => {
            console.log(res)
            setBeerData=res.data
        });
        return(
            console.log(`${beer.beerName} is a ${beer.beerType} with an ABV of ${beer.abv}. ${beer.description}`)
            // <div className='beers'>
            //     <BeerCard>
            //         {beer}
            //     </BeerCard>

            // </div>
        )
       
    }

    return (
        <Form
            model="beer"
            onSubmit={(beer) => handleSubmit(beer)}
            className="form"
        >
            <label htmlFor='beer.beerName'>Name:</label>
            <Control.text className='form--fields' model='beer.beerName' id='beer.beerName' />

            <label htmlFor='beer.abv'>ABV:</label>
            <Control.text className='form--fields' model='beer.abv' id='beer.abv' />

            <label htmlFor='beer.beerTyle'>Brew Type:</label>
            <Control.text className='form--fields' model='beer.beerType' id='beer.beerType' />

            <label htmlFor='description'>Description:</label>
            <Control.textarea className='form--fields' model='beer.description' id='beer.description' />

            <label htmlFor='beerImg'>Image:</label>
            <Control.file className='form--fields' model='beer.beerImg' id='beer.beerImg' />

            <button className='button-filled' type='submit'>Add Your Beer</button>
        </Form>
    )

}

export default BeerForm