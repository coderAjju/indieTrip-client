import React, { useState } from 'react';
import axios from 'axios';
import './Form.css'
const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://indie-trip-server.vercel.app/submit-form', formData);
            alert(response.data);
        } catch (error) {
            console.error('There was an error submitting the form!', error);
            alert('There was an error submitting the form.');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className='flex justify-center items-center flex-col'>
                <div className='SingleInput'>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='SingleInput'>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='SingleInput'>
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <button className=' p-3 bg-indigo-500 rounded' type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ContactForm;
