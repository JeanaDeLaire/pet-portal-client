import React, { Component } from 'react'
import Slideshow from '../components/SlideShow.js'
import { Link } from 'react-router-dom'
import { getPictures } from '../galleryApi.js'

class ImageGallery extends Component {

  constructor(props) {
    super(props)
    this.state = {
      pictures: []
    }
  }

  getAllPictures = () => {

    const { flash, history, user } = this.props
    console.log(user)

    getPictures(user)
      .then(res => {
        this.setState({ pictures: res.data.pictures })
        return res
      })
      // .then(res => setFeedback(`got ${ res.data.pets.length } pets`, 'success'))
      // .catch(() => setFeedback('unable to get all pets', 'error'))
  }

  componentDidMount () {
    this.getAllPictures()
  }

  render() {
    // const zoomOutProperties = {
    //   duration: 5000,
    //   transitionDuration: 500,
    //   infinite: true,
    //   indicators: true,
    //   scale: 0.4,
    //   arrows: true
    // }

    const { user } = this.props
    const images = []
    for (let i = 0; i < this.state.pictures.length; i++) {
      images.push(this.state.pictures[i].url)
    }

    // const pictures = this.state.pictures.map((data, index) => {
    //   console.log(this.state.pictures)
    //   return <Slideshow key={ index } data={ data } user={ user } getAllPictures={ this.getAllPictures }/>
    // })

    return (
      <div>
        <Slideshow images={ images } />
      </div>
    )
  }
}

export default ImageGallery
