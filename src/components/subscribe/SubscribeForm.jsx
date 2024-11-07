import React, { useState } from 'react'

const SubscribeForm = () => {
    const [formData, setFormData] = useState({ email: '' })
    const [errors, setErrors] = useState({})
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value});

        if (value.trim() === '') {
            setErrors(prevErrors => ({...prevErrors, [name]: 'You need to enter an email adress'}))
        } else {
            setErrors(prevErrors => ({...prevErrors, [name]: ''}))
        }
    }

    const handleOk = () => {
        setSubmitted(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // Regex skapad med hjälp av ChatGPT
        const newErrors = {}

        Object.keys(formData).forEach(field => {
            if (formData[field].trim() === '') {
                newErrors[field] = 'An email adress is required'
            } else if (!emailRegex.test(formData[field])) {
                newErrors[field] = 'You need to enter a valid email adress'
                return false
            }
        })

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }

        const res = await fetch('https://win24-assignment.azurewebsites.net/api/forms/subscribe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })

        if (res.ok) {
            setSubmitted(true)
            setFormData({ email: '' })
        }
    }

    if (submitted) {
        return (
            <div className='info-box' onClick={handleOk}>
                <h1>Thank you for subscribing to our newsletter!</h1>
                {/* <button className='btn-primary'>ok</button> */}
            </div>
        )
    }

    return (
        <form className="email-form" noValidate onSubmit={handleSubmit}>
            <div className='input-group'>
                <i className="fa-regular fa-envelope icon"></i>
                <input 
                    className="form-input email"
                    type="email"
                    name='email'
                    value={formData.email}
                    autocomplete="off"
                    placeholder="Your email"
                    onChange={handleChange}
                />
                <button className="btn-primary">Subscribe</button>
            </div>
            {errors.email && <span className='error'>{errors.email}</span>}
        </form>
    )
}

export default SubscribeForm