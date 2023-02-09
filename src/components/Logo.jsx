import React from 'react';
import logo from '../assets/images/logo.svg';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function Logo() {
  return (
    <>
      <LazyLoadImage src={logo} alt="logo" className="logo" />
    </>
  );
}
