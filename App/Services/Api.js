// a library to wrap and simplify api calls
import apisauce from 'apisauce'

// our "constructor"
// const create = (baseURL = 'http://localhost:5000/admin/') => {
  const create = (baseURL = 'http://3.133.99.134:5000/admin/') => {
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
  const login = (params) => api.post(`employee/add`, params )
  const sendOrders = (token, params) => api.post(`receipt/orders`, params, { headers : {'token': token}} )
  const getReceipt = (token, params) => api.post(`receipt/get`, params, { headers : {'token': token}} )
  const splitBill = (token, params) => api.post(`receipt/split`, params, { headers : {'token': token}} )
  const loadHistory = (token, params) => api.post(`receipt/load`, params, { headers : {'token': token}} )
  const searchHistory = (token, params) => api.post(`receipt/search`, params, { headers : {'token': token}} )
  const refund = (token, params) => api.post(`receipt/refund`, params, { headers : {'token': token}} )

  return {
    login,
    sendOrders,
    getReceipt,
    splitBill,
    loadHistory,
    searchHistory,
    refund
  }
}

// let's return back our create method as the default.
export default {
  create
}
