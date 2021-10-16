import React, { useState } from 'react';
import { emailValidator } from '../../utils/emailValidator';
// import { Button } from 'react-bootstrap';

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
        <div className = "contact">
            <h1 className = "sect-header">Contact me!</h1>
            <p>
                (This doesn't work quite yet)
            </p>
            <form onSubmit = {handleSubmit}>
                <div className = "label-container">
                    <label htmlFor = "name">Name: </label>
                    <input type = "text" defaultValue = {name} onBlur = {handleChange} name = "name"/>
                </div>
                <div className = "label-container">
                    <label htmlFor = "email">Email: </label>
                    <input type = "email" defaultValue = {email} onBlur = {handleChange} name = "email"/>
                </div>
                <div className = "label-container textarea">
                    <label htmlFor = "message">Message: </label>
                    <textarea name = "message" defaultValue = {message} onBlur = {handleChange} rows = "2"/>
                </div>
                {errorMessage && (
                    <div>
                        <p className = "err-msg">{errorMessage}</p>
                    </div>
                )}
                <button className = "contact-btn" type = "submit">Submit</button>
            </form>
        </div>
    );
}

export default Contact;