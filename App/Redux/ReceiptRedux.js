import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  sendOrders: ['params'],
})

export const ReceiptTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  receipt: {},
  isLoading: false
})

/* ------------- Selectors ------------- */

export const ReceiptSelectors = {
  getData: state => state.receipt
}

/* ------------- Reducers ------------- */

// request the data from an api
export const sendOrders = (state, action) =>
  state.merge({ receipt: {} })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SEND_ORDERS]: sendOrders,
})
