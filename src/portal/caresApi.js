const apiUrl = 'http://localhost:4741'

// contains CRUD calls for data related to cares
// fetch is installed into this application

export const addCare = ( data, user ) => {
  return fetch(apiUrl + '/cares', {
    method: 'POST',
    body: JSON.stringify({ care: { ...data } }),
    headers: {
      'Content-Type': 'application/json',
      'Authorization':`Token token=${user.token}`
    },
  })
}

export const updateCare = care => {
  return fetch(apiUrl + `/cares/${id}`, {
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

export const deleteCare = ( _id, user ) => {
  return fetch(apiUrl + `/cares/${_id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization':`Token token=${user.token}`
    }
  })
}
