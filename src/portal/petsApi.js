import axios from 'axios'

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

export const updatePet = pet => {
  return fetch(apiUrl + `/pets/${id}`, {
    method: 'PATCH',
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

export const deletePet = pet => {
  return fetch(apiUrl + `/pets/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization':`Token token=${user.token}`
    }
  })
}
