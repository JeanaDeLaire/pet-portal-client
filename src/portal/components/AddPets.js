import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { addPet } from '../petsApi'
import messages from '../messages'
import apiUrl from '../../apiConfig'
import '../../styles/forms.scss'

// stateful component to add pets to database
class AddPets extends Component {
  constructor () {
    super()

    this.state = {
      name: '',
      nickname: '',
      age: '',
      owner: '',
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  addPet = event => {
    event.preventDefault()

    const { name, nickname, age } = this.state
    const { flash, history, user, setUser } = this.props
    // api call to add pet to database
    // reset user when successful to ensure accurate data throughout app
    addPet(this.state, user)
      // after api call reset the user from the app level
      // to pass accurate data in props
      .then(res => res.ok ? res : new Error())
      .then(res => res.json())
      .then(res => setUser(res.user))
      .then(() => flash(messages.addPetSuccess, 'flash-success'))
      .then(() => history.push('/'))
      .catch(() => flash(messages.addPetFailure, 'flash-error'))
  }

  render () {
    const { name, nickname, age} = this.state

    return (
      <form className='auth-form' onSubmit={this.addPet}>
        <h3>Add Pet</h3>

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
        <button type="submit">Add Pet</button>
      </form>
    )
  }
}

export default withRouter(AddPets)
