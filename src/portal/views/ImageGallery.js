import React, { Component } from 'react'
import Gallery from '../components/SlideShow.js'
import { Link } from 'react-router-dom'
import { getPictures } from '../galleryApi.js'

class ImageGallery extends Component {

  constructor(props) {
    super(props)
    this.state = {
      pictures: []
    }
  }

  componentDidMount () {

    // const { setFeedback } = this.props
    const { flash, history, user } = this.props

    getPictures(user)
      .then(res => {
        this.setState({ pictures: res.data.pictures})
        return res
      })
      // .then(res => setFeedback(`got ${ res.data.pets.length } pets`, 'success'))
      // .catch(() => setFeedback('unable to get all pets', 'error'))
  }

  render() {

    const properties = {
      duration: 5000,
      transitionDuration: 500,
      infinite: true,
      indicators: true,
      arrows: true
    }

    const { user } = this.props


    const slideImages = [
      user.pictures
    ]

    const pictures = this.state.pictures.map((data, index) => {
      console.log(this.state.pictures)
      return <Gallery key={ index } data={ data } user={ user }/>
    })

    return (
      <div>
        { pictures }
      </div>
    )
  }
}

export default ImageGallery
