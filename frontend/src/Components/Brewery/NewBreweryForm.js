import axios from 'axios'
import React, { useState } from 'react'
import { Control, Form } from 'react-redux-form'
import { baseUrl } from '../../Shared/baseUrl'

function NewBreweryForm(props) {
    const [formData, setFormData] = useState({})

    async function handleSubmit(brewery) {
        //const payload
        //await axios.post(baseUrl + "/breweries"), payload)

        console.log(brewery)
    }

    <Form
        model="addBrewery"
        onSubmit={(addBrewery) => handleSubmit(addBrewery)} 
        className="form"   
    >
        <h1>Add a New Brewery</h1>
        <label htmlFor='addBrewery.name'>Name:</label>
        <Control.text className='form--fields' model='addBrewery.name' id='addBrewery.name' />

        <button className='button-filled' type='submit'>Add Brewery</button><br />
        <Control.reset className='button-filled' model="addBrewery" type="reset">
            Reset
        </Control.reset>

    </Form>
}

export default NewBreweryForm