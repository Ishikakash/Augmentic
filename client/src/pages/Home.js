import React, { useState } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from "react-scroll";
import a from '../assets/people.png';
import './Home.css';

const Home = () => {
  const [over, setOver] = useState(false);

  return (
    <div name="home" className='home-container'>
      <div className="content-container">
        <h2 className="heading">
          Let's Create a Brilliant Future With Our School.
        </h2>
        <p className="description">
          Up School is a technology high School that is committed to providing
          high quality education and implementing IT-based curriulum. 
        </p>
        <div className="link-container">
          <Link
            to="portfolio"
            smooth
            duration={500}
            className="link"
          >
            Portfolio
            <span className="arrow-icon">
              <HiArrowNarrowRight size={25} />
            </span>
          </Link>
        </div>
      </div>

      <div className="image-container">
        <img
          src={a}
        />
      </div>
    </div>
  );
};

export default Home;
