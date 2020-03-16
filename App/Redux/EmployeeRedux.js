import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  employeeLogin: ['params'],
  employeeSuccess: ['employee'],
})

export const EmployeeTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  isSuccess: false,
  employee: {},
})

/* ------------- Selectors ------------- */

export const EmployeeSelectors = {
  getData: state => state.employee
}

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state, action) =>
  state.merge({ isSuccess: false, employee: {} })

export const employeeSuccess = (state, { employee }) => 
  state.merge({ isSuccess: true, employee })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.EMPLOYEE_LOGIN]: request,
  [Types.EMPLOYEE_SUCCESS]: employeeSuccess,
})
