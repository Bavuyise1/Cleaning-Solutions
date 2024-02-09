// About.js

import React from 'react';
import image3 from '../images/image3.jpg';
import image4 from '../images/image4.jpg';
import image5 from '../images/image5.jpg';

const About = () => {
  return (
    <>
     <h1 className='tex'>About Us</h1>
    <div className="about">
     
      <section>
        <img src={image3} alt="Person 1" />
        <div className="content">
          <h2>Satisfaction Guarantee</h2>
          <p>
            Cleaning Solutions is an upcoming service provider that deals in all kinds of project.
          </p>
        </div>
      </section>
      <section>
        <img src={image4} alt="Person 2" />
        <div className="content">
          <h2>We take good care of our clients</h2>
          <p>
            Your needs are at the heart of Cleaning Solutions and finding the best possible way to satisfy those needs.
          </p>
        </div>
      </section>
      <section>
        <img src={image5} alt="Person 3" />
        <div className="content">
          <h2>We are equal</h2>
          <p>
            We provide our customers a level of service equally in the cleaning industry.
          </p>
        </div>
      </section>
    </div>
    </>
  );
};

export default About;
