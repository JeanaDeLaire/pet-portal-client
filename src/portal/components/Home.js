import React from 'react'
import '../../styles/home.scss'
import { Carousel, Jumbotron, Button } from 'react-bootstrap'

const Home = props => {

  return (
    <div className='home-body'>

      <Jumbotron className='jumbo'>
        <h1>Welcome to <span className="logo">Pet Portal</span></h1>
        <h3>A Place for Pets</h3>
      </Jumbotron>
      <p className="description">We all want our pets to be healthy and happy! Some of our animal friends require more robust care regiments than we planned for. Pet Portal is here to help us keep track of everything from dietary needs, medicine schedules, vet appointments, and so much more. You can even create your very own slide show of your furriest family members so you can look back on the memories all in one place.</p>
      <hr></hr>
    </div>
  )
}

export default Home
