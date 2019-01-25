import axios from 'axios'
import React, { Component } from 'react'
const apiUrl = 'http://localhost:4741'

export const handleErrors = res => {
  if (res.ok) {
    return res
  } else  {
    throw new Error('Recieved status in 400 or 500 range.')
  }
}

// export const getPets = () => axios.get(apiUrl + '/pets')


export const getPets = (user) => {
  return axios.get(apiUrl + '/pets', {
    headers: {
      'Content-Type': 'application/json',
      'Authorization':`Token token=${user.token}`
    }
  })
}

export const addPet = (pet, user) => {
  return fetch(apiUrl + '/pets', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization':`Token token=${user.token}`
    },
    body: JSON.stringify({
      pet: {
        name: pet.name,
        nickname: pet.nickname,
        age: pet.age,
        owner: user
      }
    })
  })
}

export const updatePet = ( data, user ) => {
  const id = data.pet
  delete data.pet
  return fetch(apiUrl + `/pets/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({ pet: { ...data } }),
    headers: {
      'Content-Type': 'application/json',
      'Authorization':`Token token=${user.token}`
    }
  })
}

export const deletePet = ( _id, user ) => {
  return fetch(apiUrl + `/pets/${_id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization':`Token token=${user.token}`
    }
  })
}
