import React, { Component } from 'react'
import Pet from '../components/Pet.js'
import { Link } from 'react-router-dom'

import { getPets, deletePet } from '../petsApi.js'

class PetIndex extends Component {

  constructor(props) {
    super(props)
    this.state = {
      pets: []
    }
  }

  getAllPets = () => {
    const { flash, history, user } = this.props

    getPets(user)
      .then(res => {
        // reset the state of user to reflect accurate data
        this.setState({ pets: res.data.pets })
        return res
      })
  }

  componentDidMount () {
    this.getAllPets()
  }

  render() {

    const { user } = this.props
    // map each index to create array to pull from in component
    const pets = this.state.pets.map((pet, index) => {
      return <Pet key={ index } data={ pet } user={ user } getAllPets={ this.getAllPets }/>
    })

    return (
      <div className="pet">
        { pets }
      </div>
    )
  }
}

export default PetIndex
