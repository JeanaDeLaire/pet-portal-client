import React, { Component } from 'react'
import './styles/App.scss'
import { Route, Link } from 'react-router-dom'

import AuthenticatedRoute from './auth/components/AuthenticatedRoute'
import Header from './header/Header'
import SignUp from './auth/components/SignUp'
import SignIn from './auth/components/SignIn'
import SignOut from './auth/components/SignOut'
import ChangePassword from './auth/components/ChangePassword'
import Slideshow from './portal/components/SlideShow'
import Pet from './portal/components/Pet'
import PetIndex from './portal/views/PetIndex'
import AddPets from './portal/components/AddPets'
import AddImage from './portal/components/AddImage'
import AddCare from './portal/components/AddCare'
import Account from './portal/components/Account'
import UpdatePet from './portal/views/UpdatePet'



class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      flashMessage: '',
      flashType: null
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  flash = (message, type) => {
    this.setState({ flashMessage: message, flashType: type })

    clearTimeout(this.messageTimeout)

    this.messageTimeout = setTimeout(() => this.setState({flashMessage: null
    }), 2000)
  }

  render () {
    const { flashMessage, flashType, user } = this.state

    return (
      <React.Fragment>
        <Header user={user} />
        {flashMessage && <h3 className={flashType}>{flashMessage}</h3>}

        <main className="container">
          <Route path='/sign-up' render={() => (
            <SignUp flash={this.flash} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn flash={this.flash} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut flash={this.flash} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword flash={this.flash} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/gallery' render={() => (
            <Slideshow flash={this.flash} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/pets' render={() => (
            <PetIndex flash={this.flash} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/add-pets' render={() => (
            <AddPets flash={this.flash} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/add-image' render={() => (
            <AddImage flash={this.flash} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/add-care' render={() => (
            <AddCare flash={this.flash} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/update-pet' render={() => (
            <UpdatePet flash={this.flash} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/account' render={() => (
            <Account flash={this.flash} user={user} />
          )} />
        </main>

      </React.Fragment>
    )
  }
}

export default App
