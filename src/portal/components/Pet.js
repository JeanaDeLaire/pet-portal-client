import React from 'react'

const Pet = props => {
  return (
    <div className="Pet" data-id={ props.data._id }>
      <h1>{ props.data.name }</h1>
      <div className="details">
        <p><b>ID</b>: { props.data._id }</p>
        <p><b>Director</b>: { props.data.nickname }</p>
        <p><b>Year</b>: { props.data.age }</p>
        <button type="submit" value="Remove">
        </button>
      </div>
    </div>
  )
}

export default Pet
