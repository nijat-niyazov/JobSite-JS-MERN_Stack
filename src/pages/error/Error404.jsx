import React from 'react';
import { Link } from 'react-router-dom';
import Wrapper from './errorStyle';
import notFound from '../../assets/images/not-found.svg';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Error404 = () => {
  return (
    <Wrapper>
      <div>
        <LazyLoadImage src={notFound} alt="error-img" />
        <h3>Ohh! page not found</h3>
        <p>We can't seem to find the page you're looking for</p>
        <Link to="/">Back to home</Link>
      </div>
    </Wrapper>
  );
};

export default Error404;
