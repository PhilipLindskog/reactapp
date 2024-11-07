import React, { useEffect, useState } from 'react'


const Accordion = () => {

    const [faqs, setFaqs] = useState([]);

    useEffect(() => {
        const fetchFaqs = async () => {
            const res = await fetch('https://win24-assignment.azurewebsites.net/api/faq');
            const data = await res.json();
            setFaqs(data);
        }

        fetchFaqs();
    }, [])

    const [isOpen, setIsOpen] = useState(null)
    
    const toggleOpen = (index) => {
        setIsOpen(isOpen === index ? null : index);
    }

    return (
        <div className='faq'>
        
            {faqs.map((index) => (
                <div key={index.id} className={`card-faq ${isOpen === index ? 'open' : ''}`}>
                    <div className='question' onClick={() => toggleOpen(index)}>
                        <h4>{index.title}</h4>
                        <button className="btn-circle btn-faq">
                            <i className="fa-solid fa-chevron-down"></i>
                        </button>
                    </div>
                    <div className='answer'>
                        <div className='expandable'>
                            <p>{index.content}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Accordion