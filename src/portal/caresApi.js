const apiUrl = 'https://infinite-waters-72391.herokuapp.com'

export const handleErrors = res => {
  if (res.ok) {
    return res
  } else  {
    throw new Error('Recieved status in 400 or 500 range.')
  }
}

export const addCare = (care, user) => {
  return fetch(apiUrl + '/cares', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization':`Token token=${user.token}`
    },
    body: JSON.stringify({
      care: {
        type: care.type,
        details: care.details,
        pet: care.pet
      }
    })
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
