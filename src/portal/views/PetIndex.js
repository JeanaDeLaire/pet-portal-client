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
        this.setState({ pets: res.data.pets })
        return res
      })
  }

  componentDidMount () {
    this.getAllPets()
  }

  render() {

    const { user } = this.props

    const pets = this.state.pets.map((pet, index) => {
      return <Pet key={ index } data={ pet } user={ user } getAllPets={ this.getAllPets }/>
    })

    return (
      <div className="pet">
        {/*  <div>
          <Link to="/update-pet">Update pet information</Link>
        </div> */}
        { pets }
      </div>
    )
  }
}

export default PetIndex
