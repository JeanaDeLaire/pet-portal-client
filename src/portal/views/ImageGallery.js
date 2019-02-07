import React, { Component } from 'react'
import Slideshow from '../components/SlideShow.js'
import { Link } from 'react-router-dom'
import { getPictures } from '../galleryApi.js'

// stateful component to get pictures and render slideshow
class ImageGallery extends Component {

  constructor(props) {
    super(props)
    this.state = {
      pictures: []
    }
  }

  getAllPictures = () => {

    const { user } = this.props

    getPictures(user)
      .then(res => {
        this.setState({ pictures: res.data.pictures })
        return res
      })
  }
  // obtain pictures from database
  componentDidMount () {
    this.getAllPictures()
  }

  render() {
    const { user } = this.props
    // create arrays for slideshow component
    // this matches input data structure
    const images = []
    const descriptions = []

    for (let i = 0; i < this.state.pictures.length; i++) {
      images.push(this.state.pictures[i].url)
      descriptions.push(this.state.pictures[i].description)
    }

    return (
      <div className="image-container">
        <Slideshow images={ images } descriptions={ descriptions } />
      </div>
    )
  }
}

export default ImageGallery
