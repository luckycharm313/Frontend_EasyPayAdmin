import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  sendOrders: ['params'],
  getReceipt: ['params'],
  getReceiptSuccess: ['scanData'],
  splitBill: ['params'],
  getSubReceiptSuccess: ['subScanData'],
})

export const ReceiptTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  receipt: {},
  scanData: {},
  subScanData: {},
  isLoading: false
})

/* ------------- Selectors ------------- */

export const ReceiptSelectors = {
  getData: state => state.receipt
}

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state, action) =>
  state.merge({ receipt: {}, scanData: {}, isLoading: false })
export const getReceiptSuccess = (state, {scanData}) =>
  state.merge({ scanData })
export const splitBill = (state, action) =>
  state.merge({ subScanData: {} })
export const getSubReceiptSuccess = (state, { subScanData }) =>
  state.merge({ subScanData })
/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SEND_ORDERS]: request,
  [Types.GET_RECEIPT]: request,
  [Types.GET_RECEIPT_SUCCESS]: getReceiptSuccess,
  [Types.SPLIT_BILL]: splitBill,
  [Types.GET_SUB_RECEIPT_SUCCESS]: getSubReceiptSuccess,
})
