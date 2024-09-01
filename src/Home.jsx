import React from 'react'
import './App.css'
import web from "../src/images/img1.avif"
import { NavLink } from 'react-router-dom'
import Common from './Common'

const Home = () => {
  return (
    <>
      <Common 
      name='Grow your buisness with'
      imgsrc={web} 
      visit="/service" 
      btname="Get Started"
      />
    </>
  )
}

export default Home
