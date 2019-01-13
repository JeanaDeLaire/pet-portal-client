import React from 'react'
import { Link } from 'react-router-dom'

const Account = props => {
  return (
    <div className="Account">
      <div>
        <Link to="/add-image">Add to Image Gallery</Link>
      </div>
      <div>
        <Link to="/add-pets">Add Pets</Link>
      </div>
      <div>
        <Link to="/add-care">Add Care Details</Link>
      </div>
      <div>
        <Link to="/change-password">Change Password</Link>
      </div>
      <div>
        <Link to="/sign-out">Sign Out</Link>
      </div>
    </div>
  )
}

export default Account
