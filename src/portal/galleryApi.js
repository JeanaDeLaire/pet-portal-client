const apiUrl = 'http://localhost:4741'
import axios from 'axios'

// contains CRUD calls for data related to photo
// fetch is installed into this application
// experimented with axios which is also installed into this application

export const handleErrors = res => {
  if (res.ok) {
    return res
  } else  {
    throw new Error('Recieved status in 400 or 500 range.')
  }
}

export const getPictures = (user) => {
  return axios.get(apiUrl + '/pictures', {
    headers: {
      'Content-Type': 'application/json',
      'Authorization':`Token token=${user.token}`
    }
  })
}

const uploadImage = function (data, user) {
  return fetch(apiUrl + '/pictures', {
    method: 'POST',
    headers: {
      'Authorization':`Token token=${user.token}`
    },
    body: data
  })
}

export const addImage = function (data, user) {
  return uploadImage(data, user)
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
