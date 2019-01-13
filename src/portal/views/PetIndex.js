import React, { Component } from 'react'
import Pet from '../components/Pet.js'

import { getPets } from '../petsApi.js'

class PetIndex extends Component {

  constructor(props) {
    super(props)
    this.state = {
      pets: []
    }
  }

  componentDidMount () {

    const { setFeedback } = this.props
    const { flash, history, user } = this.props

    getPets(user)
      .then(res => {
        this.setState({ pets: res.data.pets })
        return res
      })
      // .then(res => setFeedback(`got ${ res.data.pets.length } pets`, 'success'))
      .catch(() => setFeedback('unable to get all pets', 'error'))
  }

  render() {

    const pets = this.state.pets.map((data, index) => {
      return <Pet key={ index } data={ data }/>
    })

    return (
      <div>
        { pets }
      </div>
    )
  }
}

export default PetIndex
