import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Pet from '../components/Pet'
import { addCare } from '../caresApi'
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
    const { flash, history, user } = this.props

    addCare(this.state, user)
      // .then(() => addCare(this.state))
      // .then(res => res.json())
      // .then(res => setUser(res.user))
      .then(() => flash(messages.addCareSuccess, 'flash-success'))
      .then(() => history.push('/'))
      .catch(() => flash(messages.addCareFailure, 'flash-error'))
  }

  render () {
    const { type, details, pet } = this.state
    console.log(this.state)

    const pets = [
      {
        name: 'fido', id: 'j23ij423j498'
      },{
        name: 'danny', id: '2342323k'
      }]

    return (
      <form className='auth-form' onSubmit={this.addCare}>
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
        <input
          required
          name="pet"
          value={pet}
          type="text"
          placeholder="pet"
          onChange={this.handleChange}
        />
        <select
          required
          name="pet"
          onChange={this.handleChange}
        >
          { pets.map((pet, index) => {
            return <option value={pet.id} key={ index }> {pet.name} </option>
          })}
        </select>
        <button type="submit">Add Care Details</button>
      </form>
    )
  }
}

export default withRouter(AddCare)
