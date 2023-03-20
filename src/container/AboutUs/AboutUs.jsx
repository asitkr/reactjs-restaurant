import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
   

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans" style={{ textAlign: 'justify'}}>I think one of the hardest things about cooking is deciding what to make!  There are so many options out there –  different types of meat, or fish, or no meat at all,  different versions of different recipes, some healthy recipes that takes delicious, some healthy recipes that taste disgusting, and then some not so healthy recipes that are definitely worth splurge – and some that aren’t.    Sorting through them all and trying to find the good ones is sometimes a bit of a challenge.  I really hope that this blog becomes a place where I can share recipes I've either found or created,  which will actually be worth your time to try.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">I came here on a business trip. The restaurant was recommended by the Concierge(sometimes a dangerous call). I was intrigued by the concept - flavors based on the dishes of Asia along the spice route.</p>
        <p className="p__opensans">To start, some version of a papperdam was brought to my table. The spices were carefully described by heat level. It turned out, they were all lovely and I could handle the spice in small quantities.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
