import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import messages from '../messages'
import apiUrl from '../../apiConfig'

class AddCare extends Component {
  constructor () {
    super()

    this.state = {
      type: '',
      details: '',
      pet: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  addCare = event => {
    event.preventDefault()

    const { type, details, pet } = this.state
    // const { flash, history, setUser } = this.props

    addCare(this.state)
      .then(handleErrors)
      .then(() => addCare(this.state))
      .then(handleErrors)
      .then(res => res.json())
      // .then(res => setUser(res.user))
      .then(() => flash(messages.addCareSuccess, 'flash-success'))
      .then(() => history.push('/'))
      .catch(() => flash(messages.addCareFailure, 'flash-error'))
  }

  render () {
    const { type, details, pet} = this.state

    return (
      <form className='auth-form' onSubmit={this.addPet}>
        <h3>Add Care</h3>

        <label htmlFor="type">Type of Care</label>
        <input
          required
          name="type"
          value={type}
          type="text"
          placeholder="type"
          onChange={this.handleChange}
        />
        <label htmlFor="details">Details</label>
        <input
          required
          name="details"
          value={details}
          type="text"
          placeholder="Details"
          onChange={this.handleChange}
        />
        <label htmlFor="pet">Pet</label>
        <input
          required
          name="pet"
          value={pet}
          type="text"
          placeholder="pet"
          onChange={this.handleChange}
        />
        <button type="submit">Add Care Details</button>
      </form>
    )
  }
}

export default withRouter(AddCare)
