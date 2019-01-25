import React, { Component } from 'react'
import Pet from '../components/Pet.js'
import { withRouter } from 'react-router-dom'

import { updatePet } from '../petsApi'
import messages from '../messages'
import apiUrl from '../../apiConfig'


class UpdatePet extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      nickname: '',
      age: '',
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
      name: petData.name,
      nickname: petData.nickname,
      age: petData.age,
      pet: petData._id
    })
  }

  updatePet = event => {
    event.preventDefault()

    const { name, nickname, age } = this.state
    const { flash, history, user, setUser } = this.props

    updatePet({ ...this.state }, user)
      .then(res => res.ok ? res : new Error())
      .then(res => res.json())
      .then(res => setUser(res.user))
      .then(() => flash(messages.updatePetSuccess, 'flash-success'))
      .then(() => history.push('/'))
      .catch(() => flash(messages.updatePetFailure, 'flash-error'))
  }

  render () {
    const { user } = this.props
    const { name, nickname, age, pet } = this.state

    return (
      <form className='auth-form' onSubmit={this.updatePet}>
        <h3>Update Pet</h3>

        <label htmlFor="name">Name</label>
        <input
          required
          name="name"
          value={name}
          type="text"
          placeholder="Name"
          onChange={this.handleChange}
        />
        <label htmlFor="nickname">Nickname</label>
        <input
          required
          name="nickname"
          value={nickname}
          type="text"
          placeholder="Nickname(s)"
          onChange={this.handleChange}
        />
        <label htmlFor="age">Age</label>
        <input
          required
          name="age"
          value={age}
          type="number"
          placeholder="Age"
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
        <button type="submit">Update Pet Details</button>
      </form>
    )
  }
}

export default withRouter(UpdatePet)
