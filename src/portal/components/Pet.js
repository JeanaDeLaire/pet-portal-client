import React from 'react'
import Cares from './Cares.js'
import { deletePet } from '../petsApi.js'
import '../../styles/pets.scss'

const Pet = props => {

  const { user, setUser } = props

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
    <div className='each-pet'>
      <div className="details">
        <h1>{ props.data.name }</h1>
        {/*<p><b>ID</b>: { props.data._id }</p>*/}
        <p>Nickname(s): { props.data.nickname } </p>
        <p>Age: { props.data.age }</p>
        <button onClick={ deleteThisPet } type="submit" value="Remove">
        </button>
      </div>
      <h3>Care Details:</h3>
      <div>
        { cares }
      </div>
    </div>
  )
}

export default Pet
