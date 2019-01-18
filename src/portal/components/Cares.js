import React from 'react'
import { deleteCare } from '../caresApi.js'

const Cares = props => {

  const deleteThisCare = () => {
    deleteCare(props.data._id, props.user)
  }

  return (
    <div className="Care Instructions">
      <h4>{ props.data.type }</h4>
      <div className="details">
        {/*<p><b>ID</b>{ props.data._id }</p>*/}
        <p><b>Details: </b>{ props.data.details }</p>
        <button onClick={ deleteThisCare } type="submit" value="Remove">
        </button>
      </div>
    </div>
  )
}

export default Cares
