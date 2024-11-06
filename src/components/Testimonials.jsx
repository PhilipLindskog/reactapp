import React, { useEffect, useState } from 'react'
import avatarGirl from '../assets/images/avatarGirl.svg'

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      
        const res = await fetch('https://win24-assignment.azurewebsites.net/api/testimonials');
        const data = await res.json();
        setReviews(data);
    };

    fetchReviews();
  }, []);

  return (
    <section id="testimonials">

        <div className="container">

            <h2>Clients are Loving Our App</h2>

            <div className="review">

            {reviews.map((item) => (

              <div key={item.id} className='card'>

                <div className='quote-icon'>
                  <i className="fa-solid fa-quote-left"></i>
                </div>

                <div className='stars'>
                  {Array(item.starRating).fill().map((_, i) => (
                    <i key={`filled-${i}`} className="fa-solid fa-star"></i>
                  ))}
                  {Array(5 - item.starRating).fill().map((_, i) => (
                    <i key={`empty-${i}`} className="fa-regular fa-star"></i>
                  ))}
                  
                </div>

                <p>{item.comment}</p>

                <div className='author'>
                  <img src={item.avatarUrl} alt="" />

                  <div className='name-role'>
                    <p className='name'>{item.author}</p>
                    <p className='role'>{item.jobRole}</p>
                  </div>
                </div>

              </div>
            ))}
              
            </div>

        </div>
    </section>
  )
}

export default Testimonials