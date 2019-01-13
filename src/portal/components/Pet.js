import React from 'react'

const Pet = props => {
  return (
    <div className="Pet">
      <h1>Name</h1>
      <div className="details">
        <p><b>Nickname</b>:Nickname</p>
        <p><b>Age</b>:Age</p>
      </div>
      <h3>Care</h3>
      <ul>
        <li>Type: Description</li>
      </ul>

    </div>
  )
}

export default Pet
