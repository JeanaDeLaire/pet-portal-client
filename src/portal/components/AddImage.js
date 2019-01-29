import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { addImage } from '../galleryApi'
import messages from '../messages'
import apiUrl from '../../apiConfig'
import '../../styles/forms.scss'

class AddImage extends Component {
  constructor () {
    super()

    this.state = {
      image: '',
      description: '',
      date: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  addAnImage = event => {
    event.preventDefault()

    const data = new FormData(event.target)
    const { image: url, description, date } = this.state
    const { flash, history, user, setUser } = this.props

    addImage(data, user)
      .then(res => res.ok ? res : new Error())
      .then(res => res.json())
      .then(res => setUser(res.user))
      .then(() => flash(messages.addImageSuccess, 'flash-success'))
      .then(() => history.push('/'))
      .catch(() => flash(messages.addImageFailure, 'flash-error'))
  }

  render () {
    const { image: url, description, date} = this.state

    return (
      <form className='auth-form' encType="multipart/form-data" onSubmit={this.addAnImage}>
        <h3>Add Image</h3>

        <label htmlFor="image">Image Upload</label>
        <input
          required
          name="image"
          value={url}
          type="file"
          placeholder="Image Upload"
          onChange={this.handleChange}
        />
        <label htmlFor="description">Description</label>
        <input
          required
          name="description"
          value={description}
          type="text"
          placeholder="Description"
          onChange={this.handleChange}
        />
        <label htmlFor="date">When was your photo taken</label>
        <input
          required
          name="date"
          value={date}
          type="date"
          placeholder="Date"
          onChange={this.handleChange}
        />
        <button type="submit">Add Image</button>
      </form>
    )
  }
}

export default withRouter(AddImage)
