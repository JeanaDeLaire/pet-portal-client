import React from 'react'

import '../styles/Pet.css'

const Pet = props => {
  return (
    <div className="Pet">
      <h1>{ props.data.name }</h1>
      <div className="details">
        <p><b>ID</b>: { props.data.id }</p>
        <p><b>Director</b>: { props.data.director }</p>
        <p><b>Year</b>: { props.data.year }</p>
      </div>
      <h3>Care</h3>
      <ul>
        <li>{ props.data.type } : { props.data.type }</li>
      </ul>

    </div>
  )
}

export default Pet
