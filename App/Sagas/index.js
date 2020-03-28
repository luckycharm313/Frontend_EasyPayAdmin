import { takeLatest, all } from 'redux-saga/effects'
import API from '../Services/Api'
import FixtureAPI from '../Services/FixtureApi'
import DebugConfig from '../Config/DebugConfig'

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'
import { EmployeeTypes } from '../Redux/EmployeeRedux'
import { ReceiptTypes } from '../Redux/ReceiptRedux'


/* ------------- Sagas ------------- */

import { login } from './EmployeeSagas'
import { startup, isLogin } from './StartupSagas'
import { sendOrders, getReceipt, splitBill, loadHistory, searchHistory, refund } from './ReceiptSagas'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = DebugConfig.useFixtures ? FixtureAPI : API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(StartupTypes.IS_LOGIN, isLogin),

    takeLatest(EmployeeTypes.EMPLOYEE_LOGIN, login, api),

    takeLatest(ReceiptTypes.SEND_ORDERS, sendOrders, api),
    takeLatest(ReceiptTypes.GET_RECEIPT, getReceipt, api),
    takeLatest(ReceiptTypes.SPLIT_BILL, splitBill, api),
    takeLatest(ReceiptTypes.LOAD_HISTORY, loadHistory, api),
    takeLatest(ReceiptTypes.SEARCH_HISTORY, searchHistory, api),
    takeLatest(ReceiptTypes.REFUND, refund, api),
  ])
}
