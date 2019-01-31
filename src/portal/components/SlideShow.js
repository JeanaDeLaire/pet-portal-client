import React from 'react'
import { Slide } from 'react-slideshow-image'
import '../../styles/gallery.scss'

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  arrows: true
}

const Slideshow = (props) => {
  const images = props.images
  if (images.length > 0) {
    return (
      <div className='images'>
        <Slide {...properties}>
          {
            images.map((each, index) => <div className='inde-image' key={index}><img key={index} src={each} /></div>)
          }
        </Slide>
      </div>
    )
  } else {
    return null
  }
}

export default Slideshow
