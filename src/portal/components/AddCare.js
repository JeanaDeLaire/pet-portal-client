import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Pet from '../components/Pet'
import { addCare } from '../caresApi'
import messages from '../messages'
import apiUrl from '../../apiConfig'
import '../../styles/forms.scss'

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

  handlePetChange = event => {
    const { user } = this.props
    const petId = event.target.value
    const petData = user.pets.find(pet => pet._id === petId)
    this.setState({
      pet: petData._id
    })
  }

  addACare = event => {
    event.preventDefault()

    const { type, details } = this.state
    const { flash, history, user, setUser } = this.props

    addCare({ ...this.state}, user)
      .then(res => res.ok ? res : new Error())
      .then(res => res.json())
      .then(res => setUser(res.user))
      .then(() => flash(messages.addCareSuccess, 'flash-success'))
      .then(() => history.push('/'))
      .catch(() => flash(messages.addCareFailure, 'flash-error'))
  }

  render () {
    const { type, details, pet } = this.state
    const { user } = this.props

    return (
      <form className='auth-form' onSubmit={this.addACare}>

        <h3>Add Care</h3>

        <label htmlFor="type">Type Care</label>
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

        <select
          required
          name="pet"
          onChange={this.handlePetChange}
        >
          <option value="" disabled selected>Choose your pet...</option>
          { user.pets.map((pet, index) => {
            return <option value={user.pets[index]._id} key={ index }> {user.pets[index].name} </option>
          })}
        </select>
        <button type="submit">Add Care Details</button>
      </form>
    )
  }
}

export default withRouter(AddCare)
