import React from 'react';
import logo from '../assets/images/logo.svg';
import main from '../assets/images/main.svg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Wrapper from '../assets/wrappers/LandingPage';

const FirstPage = () => {
  return (
    <Wrapper>
      <nav>
        <LazyLoadImage src={logo} alt="logo" className="logo" />
        <h4>Welcome to our site</h4>
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            Job <span>finding</span> site
          </h1>
          <p>
            Welcome to our Job-Offering site! We're here to connect job seekers
            with exciting job opportunities from top companies. You can find the
            perfect job that matches your skills and experience. Simply create
            an account, upload your resume, and start applying to the jobs
            you're interested in. Good luck on your job search journey!
          </p>
          <button className="btn btn-hero">Login/Register</button>
        </div>
        {/* main */}
        <LazyLoadImage src={main} alt="main" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default FirstPage;
