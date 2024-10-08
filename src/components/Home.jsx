import React from 'react'
import HomeImage from '../assets/banner.png'
import Products from './Products'

const Home = () => {
  return (
    <>
      <img className='w-full max-h-screen mb-10' src={HomeImage}></img>
      <Products/>
    </>
  )
}

export default Home
