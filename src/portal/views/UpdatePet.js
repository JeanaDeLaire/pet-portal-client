import React, { Component } from 'react'
import Pet from '../components/Pet.js'
import { withRouter } from 'react-router-dom'

import { updatePet } from '../petsApi'
import messages from '../messages'
import apiUrl from '../../apiConfig'


class UpdatePet extends Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      pets: []
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  updatePet = event => {
    event.preventDefault()

    // const { pets } = this.state
    const { flash, history, user } = this.props

    updatePet(this.state, user)
      .then(res => {
        this.setState({ pets: res.data.pets })
        return res
      })
      // .then(() => addPet(this.state))
      // .then(res => res.json())
      .then(() => flash(messages.addPetSuccess, 'flash-success'))
      .then(() => history.push('/'))
      .catch(() => flash(messages.addPetFailure, 'flash-error'))
  }

  render () {
    const { user } = this.props

    const pets = this.state.pets.map((pet, index) => {
      console.log(pet)
      return <option value={pet._id} key={ index }> {pet.name} </option>
    })

    // console.log(this.state)

    return (
      <form className='auth-form' onSubmit={this.updatePet}>
        <h3>Update Pet</h3>

        <label htmlFor="name">Name</label>
        <input
          required
          name="name"
          value={this.state.pets.name}
          type="text"
          placeholder="Name"
          onChange={this.handleChange}
        />
        <label htmlFor="nickname">Nickname</label>
        <input
          required
          name="nickname"
          value={this.state.pets.nickname}
          type="text"
          placeholder="Nickname(s)"
          onChange={this.handleChange}
        />
        <label htmlFor="age">Age</label>
        <input
          required
          name="age"
          value={this.state.pets.age}
          type="number"
          placeholder="Age"
          onChange={this.handleChange}
        />
        <select
          required
          name="pet"
          onChange={this.handleChange}
        >
          { pets }
        </select>
        <button type="submit">Update Pet</button>
      </form>
    )
  }
}

export default withRouter(UpdatePet)
