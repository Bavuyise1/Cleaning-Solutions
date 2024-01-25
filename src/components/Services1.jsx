// Services.js

import React from 'react';


const Services = () => {
  return (
    <div className="services">
      <h1>Our Services</h1>
      <div className="service-item">
        <img src="https://images.pexels.com/photos/3769711/pexels-photo-3769711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Cleaning Service 1" />
        <div className="service-info">
          <h2>Regular Cleaning</h2>
          <p>
            Daily vacuum cleaning.
            <br/>
            Floor cleaning.
          </p>
        </div>
      </div>
      <div className="service-item">
        <img src="https://images.pexels.com/photos/3768914/pexels-photo-3768914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Cleaning Service 2" />
        <div className="service-info">
          <h2>Deep Cleaning</h2>
          <p>
            Carpet and uphastery cleaning.
            <br/>
            Basement cleaning.
          </p>
        </div>
      </div>
      <div className="service-item">
        <img src="https://images.pexels.com/photos/4239127/pexels-photo-4239127.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Cleaning Service 3" />
        <div className="service-info">
          <h2>Window Cleaning</h2>
          <p>
            High rise windows.
            
        
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
