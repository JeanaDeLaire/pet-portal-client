const apiUrl = 'http://localhost:4741'

export const handleErrors = res => {
  if (res.ok) {
    return res
  } else  {
    throw new Error('Recieved status in 400 or 500 range.')
  }
}

// export const addImage = (form, user) => {
//   form = new FormData(event.target)
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

const uploadImage = function (data, user) {
  for(const pair of data.entries()) {
    console.log(pair[0]+', ' + pair[1])
  }
  return fetch(apiUrl + '/pictures', {
    method: 'POST',
    headers: {
      'Authorization':`Token token=${user.token}`
      // 'Content-Type': 'multipart/form-data',
      // 'processData': 'false'
    },
    body: data
    // contentType: false,
    // processData: false
  })
}

export const addImage = function (data, user) {
  console.log(event.target)
  uploadImage(data, user)
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
