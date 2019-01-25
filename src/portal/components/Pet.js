import React from 'react'
import Cares from './Cares.js'
import { deletePet } from '../petsApi.js'
import '../../styles/pets.scss'
import { Button } from 'react-bootstrap'

const Pet = props => {

  const { user, setUser } = props

  const deleteThisPet = () => {
    deletePet(props.data._id, props.user)
      .then(props.getAllPets)
  }

  const cares = props.data.cares.map((care, index) => {
    return <Cares key={ index } data={ care } user={ user }/>
  })

  return (
    <div className='each-pet'>
      <div className="profile">
        <h1 className="pet-title">{ props.data.name }</h1>
        <p className='pet-details'>Nickname(s): { props.data.nickname } </p>
        <p className='pet-details'>Age: { props.data.age }</p>
        <Button bsStyle="primary" className='del-pet' onClick={ deleteThisPet } type="submit" value="Remove"><i className="fas fa-trash-alt"></i></Button>
      </div>
      <div className='cares'>
        <h4 className='title-cares'><span>{ props.data.name }</span>&#39;s Care Details:</h4>
        { cares }
      </div>
    </div>
  )
}

export default Pet
