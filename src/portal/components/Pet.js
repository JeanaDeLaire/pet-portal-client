import React from 'react'
import { deletePet } from '../petsApi.js'

const Pet = props => {

  const deleteThisPet = () => {
    deletePet(props.data._id, props.user)
      .then(props.getAllPets)
  }

  return (
    <div className="Pet">
      <h1>{ props.data.name }</h1>
      <div className="details">
        <p><b>ID</b>: { props.data._id }</p>
        <p><b>Nickname</b>: { props.data.nickname }</p>
        <p><b>Year</b>: { props.data.age }</p>
        <button onClick={ deleteThisPet } type="submit" value="Remove">
        </button>
      </div>
    </div>
  )
}

export default Pet
