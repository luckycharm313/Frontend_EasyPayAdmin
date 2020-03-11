import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  startup: null,
  isLogin: null,
  loadProgress: ['isLoading'],
  checkLogin: ['isLogged'],
})

export const INITIAL_STATE = Immutable({
  isLoading : false,
  isLogged : false,
})

export const StartupTypes = Types
export default Creators

export const startup = (state, action) => state.merge({isLoading: false})
export const reqest = (state, action) => state.merge({isLogged: false})
export const loadProgress = (state, {isLoading}) => state.merge({isLoading})
export const checkLogin = (state, {isLogged}) => state.merge({isLogged})

export const reducer = createReducer(INITIAL_STATE, {
  [Types.STARTUP]: startup,
  [Types.LOAD_PROGRESS]: loadProgress,
  [Types.IS_LOGIN]: reqest,
  [Types.CHECK_LOGIN]: checkLogin,
})
