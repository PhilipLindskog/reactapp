import React, { useState } from 'react'

const ContactForm = () => {
    const [options, setOptions] = useState([{ id: 1, text: "Specialist 1" }, { id: 2, text: "Specialist 2" }])
    const [formData, setFormData] = useState({ fullName: '', email: '', specialist: options[0].text })
    const [errors, setErrors] = useState({})
    const [submitted, setSubmitted] = useState(false)
    const nameRegex = /^[A-Öa-ö\s\-]{2,}$/;
    const emailRegex = /^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    const validateField = (name, value) => {
        let error = '';

        if (name === 'fullname' && !nameRegex.test(value)) {
            error = "Your name must be at least 2 characters long";
        } else if (name === 'email' && !emailRegex.test(value)) {
            error = "Enter a valid email adress (example@domain.com)";
        }

        setErrors(prevErrors => ({ ...prevErrors, [name]: error }));
    }

    const validateForm = () => {
        const newErrors = {}

        if (!nameRegex.test(formData.fullName)) {
            newErrors.fullName = "Your name must be at least 2 characters long";
        }

        if (!emailRegex.test(formData.email)) {
            newErrors.email = "Enter a valid email adress (example@domain.com)";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name === "specialist") {
            const selectedOption = options.find(option => option.id === parseInt(value));
            setFormData({ ...formData, [name]: selectedOption.text });
        } else {
            setFormData({ ...formData, [name]: value });
        }
        validateField(name, value);
    }

    const handleOk = () => {
        setSubmitted(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        validateForm()

    

        const res = await fetch('https://win24-assignment.azurewebsites.net/api/forms/contact', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(formData),
        })
       

        if (res.ok) {
            setSubmitted(true)
            setFormData({ fullName: '', email: '', specialist: options[0].text })
        }
    }

    if (submitted) {
        return (
            <div className='sent-appointment' onClick={handleOk}>
                <h3>Thank you for making an appointment!</h3>
                <p>We will contact you soon</p>
            </div>
        )
    }

    return (
        <div className='form-card'>

            <h3>Get Online Consultation</h3>
            <form id="consult-form" onSubmit={handleSubmit} noValidate>
                <label htmlFor="fullName" className='form-label'>Full Name</label>
                <input
                    type="text" 
                    id='fullName' 
                    name='fullName' 
                    value={formData.fullName}
                    onChange={handleInputChange} 
                    required 
                />
                {errors.fullName && <span className='error'>{errors.fullName}</span>}

                <label htmlFor="email" className='form-label'>Email Address</label>
                <input
                    type="email" 
                    id='email' 
                    name='email' 
                    value={formData.email}
                    onChange={handleInputChange} 
                    required 
                />
                {errors.email && <span className='error'>{errors.email}</span>}

                <label htmlFor="options" className='form-label'>Specialist</label>
                <select
                    id='specialist' 
                    name='specialist'
                    aria-label='Choose specialist' 
                    value={options.find(option => option.text === formData.specialist)?.id || options[0].id}
                    onChange={handleInputChange}  
                    required 
                >
                {options.map(option => (
                    <option key={option.id} value={option.id}>
                        {option.text}
                    </option>
                ))}
                </select>

                <button type='submit' className='btn-primary'>Make an appointment</button>
            </form>
        </div>
    )
}

export default ContactForm