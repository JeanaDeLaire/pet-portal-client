import React from 'react'
import { Slide } from 'react-slideshow-image'

const slideImages = [
  'images/slide_2.jpg',
  'images/slide_3.jpg',
  'images/slide_4.jpg'
]

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
}

const Slideshow = (props) => {
  const { user } = props
  console.log(user)
  const pictures = user.pictures.map((data, index) => {
    return
  })
  return (
    <Slide {...properties}>
      <div className="each-slide">
        <div style={{'backgroundImage': `url(${user.pictures[0].url})`}}>
          <span>Slide 1</span>
        </div>
      </div>
      <div className="each-slide">
        <div style={{'backgroundImage': `url(${user.pictures[1].url})`}}>
          <span>Slide 2</span>
        </div>
      </div>
      <div className="each-slide">
        <div style={{'backgroundImage': `url(${user.pictures[2]})`}}>
          <span>Slide 3</span>
        </div>
      </div>
    </Slide>
  )
}
export default Slideshow
