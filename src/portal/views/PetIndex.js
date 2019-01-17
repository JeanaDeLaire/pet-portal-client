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
    console.log(user)

    getPets(user)
      .then(res => {
        this.setState({ pets: res.data.pets })
        return res
      })
      // .then(res => setFeedback(`got ${ res.data.pets.length } pets`, 'success'))
      // .catch(() => setFeedback('unable to get all pets', 'error'))
  }

  componentDidMount () {
    this.getAllPets()
  }

  render() {

    const { user } = this.props

    const pets = this.state.pets.map((data, index) => {
      console.log(this.state.pets)
      return <Pet key={ index } data={ data } user={ user } getAllPets={ this.getAllPets }/>
    })
    return (
      <div>
        <div>
          <Link to="/update-pet">Update pet information</Link>
        </div>
        { pets }
      </div>
    )
  }
}

export default PetIndex
