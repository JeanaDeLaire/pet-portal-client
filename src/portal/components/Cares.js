import React from 'react'
import { deleteCare } from '../caresApi.js'
import { Button } from 'react-bootstrap'

const Cares = props => {

  const deleteThisCare = () => {
    deleteCare(props.data._id, props.user)
  }

  return (
    <div>
      <div className='inde-cares'>
        {/*<p><b>ID</b>{ props.data._id }</p>*/}
        <p>{ props.data.type }: { props.data.details }</p>
        <Button className='button' bsStyle="primary" onClick={ deleteThisCare } type="submit" value="Remove"><i className="fas fa-trash-alt"></i></Button>
      </div>
    </div>
  )
}

export default Cares
