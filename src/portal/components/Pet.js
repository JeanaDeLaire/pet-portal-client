import React from 'react'
import { deletePet } from '../petsApi.js'

const Pet = props => {
  return (
    <div className="Pet">
      <h1>{ props.data.name }</h1>
      <div className="details">
        <p><b>ID</b>: { props.data._id }</p>
        <p><b>Director</b>: { props.data.nickname }</p>
        <p><b>Year</b>: { props.data.age }</p>
        <button onClick={ function() { deletePet(props.data._id, props.user) } } type="submit" value="Remove">
        </button>
      </div>
    </div>
  )
}

export default Pet
