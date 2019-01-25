import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/account.scss'

const Account = props => {
  return (
    <div className="Account">
      <div>
        <Link to="/add-image" className='account-link'>Add to Image Gallery</Link>
      </div>
      <div>
        <Link to="/add-pets" className='account-link'>Add A New Pet</Link>
      </div>
      <div>
        <Link to="/update-pet" className='account-link'>Update A Pet</Link>
      </div>
      <div>
        <Link to="/add-care" className='account-link'>Add Care Details</Link>
      </div>
      <div>
        <Link to="/change-password" className='account-link'>Change Password</Link>
      </div>
      <div>
        <Link to="/sign-out" className='account-link'>Sign Out</Link>
      </div>
    </div>
  )
}

export default Account
