import React from 'react'
import { deleteCare } from '../caresApi.js'

const Cares = props => {

  const deleteThisCare = () => {
    deleteCare(props.data._id, props.user)
  }

  console.log('you are here')

  return (
    <div className="Care Instructions">
      <h3>{ props.data.type }</h3>
      <div className="details">
        <p><b>ID</b>{ props.data._id }</p>
        <p><b>Details</b>{ props.data.details }</p>
        <button onClick={ deleteThisCare } type="submit" value="Remove">
        </button>
      </div>
    </div>
  )
}

export default Cares
