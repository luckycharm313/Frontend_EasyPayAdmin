// a library to wrap and simplify api calls
import apisauce from 'apisauce'

// our "constructor"
const create = (baseURL = 'http://localhost:5000/api/') => {
  const api = apisauce.create({
    // base URL is read from the "constructor"
    baseURL,
    headers: {
      'Cache-Control': 'no-cache',
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    // 10 second timeout...
    timeout: 10000
  })
  //
  const signup = (params) => api.post(`user/signup`, params )
  const signin = (params) => api.post(`user/signin`, params )
  const loadUserProfile = (token) => api.post(`user/loadUserProfile`, {}, { headers : {'token': token}})
  const updateUserProfile = (token, params) => api.post(`user/updateUserProfile`, params, { headers : {'token': token}})

  return {
    signup,
    signin,
    loadUserProfile,
    updateUserProfile
  }
}

// let's return back our create method as the default.
export default {
  create
}
