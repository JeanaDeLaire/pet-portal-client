import React from 'react'
import { Zoom } from 'react-slideshow-image'

// const images = [
//   'https://slaterkitty.s3.amazonaws.com/pictures/71ae5d5760e2ec7c0bba8e9f15bdb693.png',
//   'https://slaterkitty.s3.amazonaws.com/pictures/effc72fcc627d3d2222254c1af62f7a3.png',
//   'https://slaterkitty.s3.amazonaws.com/pictures/d73fd4b92fe29dc63786aed6bc55fc90.png',
//   'images/slide_5.jpg',
//   'images/slide_6.jpg',
//   'images/slide_7.jpg'
// ]


const zoomOutProperties = {
  duration: 6000,
  transitionDuration: 1000,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true
}

const Slideshow = (props) => {
  console.log(props.images)
  const images = props.images
  if (images.length > 0) {
    return (
      <Zoom {...zoomOutProperties}>
        {
          images.map((each, index) => <img key={index} src={each} />)
        }
      </Zoom>
    )
  } else {
    return null
  }
}

export default Slideshow
