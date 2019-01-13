const apiUrl = 'http://localhost:4741'

export const handleErrors = res => {
  if (res.ok) {
    return res
  } else  {
    throw new Error('Recieved status in 400 or 500 range.')
  }
}

export const addImage = (picture, user) => {
  return fetch(apiUrl + '/pictures', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization':`Token token=${user.token}`
    },
    body: JSON.stringify({
      picture: {
        url: picture.url,
        description: picture.description,
        date: picture.data,
        pet: user
      }
    })
  })
}

// export const addImage = function (form, user) {
//   const data = form
//   return fetch(apiUrl + '/pictures', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization':`Token token=${user.token}`
//     },
//     data,
//     contentType: false,
//     processData: false
//   })
// }

export const updatePicture = picture => {
  return fetch(apiUrl + `/pictures/${id}`, {
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

export const deletePicture = picture => {
  return fetch(apiUrl + `/pictures/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization':`Token token=${user.token}`
    }
  })
}
