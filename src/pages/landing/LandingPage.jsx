import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import main from '../../assets/images/main.svg';
import Wrapper from './landingStyle';
import { Logo } from '../../components/exporter';

const LandingPage = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
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
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>

        <LazyLoadImage src={main} alt="main" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default LandingPage;
