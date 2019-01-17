import React from 'react'
import Cares from './Cares.js'
import { deletePet } from '../petsApi.js'

const Pet = props => {

  const { user } = props

  const deleteThisPet = () => {
    deletePet(props.data._id, props.user)
      .then(props.getAllPets)
  }
  console.log('this is props ', props)
  const cares = props.data.cares.map((care, index) => {
    console.log('this is data ', care)
    return <Cares key={ index } data={ care } user={ user }/>
  })

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
      <div>
        { cares }
      </div>
    </div>
  )
}

export default Pet
