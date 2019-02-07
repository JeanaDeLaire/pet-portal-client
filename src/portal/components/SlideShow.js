import React from 'react'
import { Slide } from 'react-slideshow-image'
import '../../styles/gallery.scss'

// this component comes from the following project:
// https://www.npmjs.com/package/react-slideshow-image

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  arrows: true
}

const Slideshow = (props) => {
  const images = props.images
  const descriptions = props.descriptions
  console.log(descriptions)
  if (images.length > 0) {
    return (
      <div className='images'>
        {/* my code hack to display image descriptions
        <Slide {...properties}>
          {
            descriptions.map((each, index) => <div className='inde-desc' key={ index} ><div key={ index } data={ each } >{ each }</div></div>)
          }
        </Slide>
        */}
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
