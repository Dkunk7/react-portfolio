import React, { useState } from 'react';
import { emailValidator } from '../../utils/emailValidator';

const Contact = () => {
    const [contactState, setContactState] = useState({ name: '', email: '', message: ''});
    const { name, email, message } = contactState;

    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = emailValidator(e.target.value);
            console.log(isValid);

            if (!isValid) {
                setErrorMessage("You've entered an invalid email");
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {        
            setContactState({...contactState, [e.target.name]: e.target.value}) // Using spread incorporates name, email, and message. If not for spread (...), formState would be overwritted to only have the property being changed
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

    return(
        <div>
            <h1>Contact me!</h1>
            <form onSubmit = {handleSubmit}>
                <div>
                    <label htmlFor = "name">Name:</label>
                    <input type = "text" defaultValue = {name} onBlur = {handleChange} name = "name"/>
                </div>
                <div>
                    <label htmlFor = "email">Email:</label>
                    <input type = "email" defaultValue = {email} onBlur = {handleChange} name = "email"/>
                </div>
                <div>
                    <label htmlFor = "message">Message:</label>
                    <input type = "message" defaultValue = {message} onBlur = {handleChange} rows = "5"/>
                </div>
                {errorMessage && (
                    <div>
                        <p >{errorMessage}</p>
                    </div>
                )}
                <button type = "submit">Submit</button>
            </form>
        </div>
    );
}

export default Contact;