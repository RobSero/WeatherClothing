import React from 'react';
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='primary'>
      <Link to=''>
    <img className='logo' src='https://res.cloudinary.com/dy7eycl8m/image/upload/v1603290472/whitepropeller_l2scuy.png' alt='windmill logo' />
    </Link>
    </nav>
  );
}
