import React from 'react'
import { Slide } from 'react-slideshow-image'
import '../../styles/gallery.scss'

// const images = [
//   'https://slaterkitty.s3.amazonaws.com/pictures/71ae5d5760e2ec7c0bba8e9f15bdb693.png',
//   'https://slaterkitty.s3.amazonaws.com/pictures/effc72fcc627d3d2222254c1af62f7a3.png',
//   'https://slaterkitty.s3.amazonaws.com/pictures/d73fd4b92fe29dc63786aed6bc55fc90.png',
//   'images/slide_5.jpg',
//   'images/slide_6.jpg',
//   'images/slide_7.jpg'
// ]

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
}

const Slideshow = (props) => {
  console.log(props.images)
  const images = props.images
  if (images.length > 0) {
    return (
      <div className='images'>
        <Slide {...properties}>
          {
            images.map((each, index) => <img key={index} src={each} />)
          }
        </Slide>
      </div>
    )
  } else {
    return null
  }
}

export default Slideshow
