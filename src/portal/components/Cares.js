import React from 'react'
import { deleteCare } from '../caresApi.js'
import { Button } from 'react-bootstrap'

// stateless component rendering within pets
const Cares = props => {
  // set user as props to obtain user.pet[i].cares
  const { user, setUser } = props

  const deleteThisCare = () => {
    deleteCare(props.data._id, props.user)
      // get all pets to refresh page after deleting a care
      .then(props.getAllPets)
  }

  return (
    <div className='inde-cares'>
      <p>{ props.data.type }: { props.data.details }</p>
      <Button className='button' bsStyle="primary" onClick={ deleteThisCare } type="submit" value="Remove"><i className="fas fa-trash-alt"></i></Button>
    </div>
  )
}

export default Cares
