import React from 'react'
import Navbar from '../common/Navbar'
import Footer from '../common/Footer'

export default function ShowPage() {
  return (
    <>
      <Navbar />
      <div className='show-container'>
      <div className='flex-show-section'>
        <div className='flex-item'>
          <p> side one</p>
        </div>
        <div className='flex-item'>
          <p> side one</p>
        </div>
      </div>
      </div>
      <Footer />
    </>
  )
}
