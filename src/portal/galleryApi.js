const apiUrl = 'http://localhost:4741'
import axios from 'axios'

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
  for(const pair of data.entries()) {
    console.log(pair[0]+', ' + pair[1])
  }
  return fetch(apiUrl + '/pictures', {
    method: 'POST',
    headers: {
      'Authorization':`Token token=${user.token}`
    },
    body: data
  })
}

export const addImage = function (data, user) {
  uploadImage(data, user)
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
