import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { addPicture } from '../galleryApi'
import messages from '../messages'
import apiUrl from '../../apiConfig'

class AddImage extends Component {
  constructor () {
    super()

    this.state = {
      url: '',
      description: '',
      date: '',
      pet: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  addImage = event => {
    event.preventDefault()

    const { url, description, date } = this.state
    // const { flash, history, setUser } = this.props

    addImage(this.state)
      .then(handleErrors)
      .then(() => addPet(this.state))
      .then(handleErrors)
      .then(res => res.json())
      // .then(res => setUser(res.user))
      .then(() => flash(messages.addImageSuccess, 'flash-success'))
      .then(() => history.push('/'))
      .catch(() => flash(messages.addImageFailure, 'flash-error'))
  }

  render () {
    const { url, description, date} = this.state

    return (
      <form className='auth-form' onSubmit={this.addPet}>
        <h3>Add Image</h3>

        <label htmlFor="url">Image Upload</label>
        <input
          required
          name="url"
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
