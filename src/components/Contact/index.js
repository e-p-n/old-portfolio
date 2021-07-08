import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';



function ContactForm() {
    const [errorMessage, setErrorMessage] = useState('');
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;

    function handleChange(e) {
        if(e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if(!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if(!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required`)
            } else {
                setErrorMessage('');
            }
        }
        if(!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value })
        }

        
    }

    function handleSubmit(e) {
        e.preventDefault();
        const fields = {};
        fields.name = document.getElementById('name');
        fields.email = document.getElementById('email');
        fields.message = document.getElementById('message');
    }
    return (
        <section className="mt-5">
            <h1>Contact me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                {/* name input */}
                <div>
                    <input id="name" type="text" name="name" placeholder="Name" defaultValue={name} onBlur={handleChange} />
                </div>
                {/* email input */}
                <div>
                    <input id="email" type="text" name="email" placeholder="Email" defaultValue={email} onBlur={handleChange} />
                </div>
                {/* message text area */}
                <div>
                    <textarea id="message" name="message" rows="5" placeholder="Message" defaultValue={message} onBlur={handleChange} />
                </div>
                {errorMessage && (
                    <div>
                        <p className="text-danger">{errorMessage}</p>
                    </div>
                )}
                <button data-testid="subBtn" type="submit" className="btn btn-primary rounded-pill ml-2 mt-4">Submit</button>
            </form>
        </section>
    );
}

export default ContactForm;