import axios from 'axios'
import React, { useState } from 'react'
import { Control, Form } from 'react-redux-form'
import { baseUrl } from '../../Shared/baseUrl'

// import './BeerForm.css'

function NewBrewerForm(props) {
    // const [formData, setFormData] = useState({})
    const [isBrewerAdded, setIsBrewerAdded] = useState(false)
    let successMessage

    async function handleSubmit(brewer) {

        const payload = {username: brewer.username, password: brewer.password, confirmPassword: brewer.password, role: 'BREWER'}
        
        const response = await axios.post(baseUrl + "/register", payload)

        if (response.status === 200) {
            setIsBrewerAdded(true)
        }
    }

    function handleReset() {
        setIsBrewerAdded(false)
    }

    return (
        <Form
            model="brewer"
            onSubmit={(brewer) => handleSubmit(brewer)}
            className="form"
        >
            <h1>Add a New Brewer Account</h1>
            <label htmlFor='brewer.username'>Username:</label>
            <Control.text className='form--fields' model='brewer.username' id='brewer.username' />

            <label htmlFor='brewer.password'>Password:</label>
            <Control.text className='form--fields' model='brewer.password' id='brewer.password' />

            <button className='button-filled' type='submit'>Add Brewer</button><br />
            <button className='button-filled' type='reset' onClick={handleReset}>Reset</button>

            {isBrewerAdded && <h1>Brewer added successfully!</h1>}
        </Form>
    )
}

export default NewBrewerForm