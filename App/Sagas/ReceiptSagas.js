
import { call, put } from 'redux-saga/effects'
import Toast from 'react-native-simple-toast'
import { AsyncStorage } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { path } from 'ramda'

import ReceiptActions from '../Redux/ReceiptRedux'
import StartupActions from '../Redux/StartupRedux';

import { TOKEN } from '../Services/Constant'

export function * sendOrders (api, action) {
  const { params } = action
  const token = JSON.parse(yield AsyncStorage.getItem(TOKEN))

  yield put(StartupActions.loadProgress(true));
  const response = yield call(api.sendOrders, token, params);
  yield put(StartupActions.loadProgress(false));
  
  if (response.ok) {
    const temp = path(['data'], response);
    if (temp.code === 200) {
      yield put(NavigationActions.navigate({ routeName: 'IssueReceiptScreen', params: { receipt_id: temp.payload } }));
    } else {
      Toast.show(temp.message);
    }
  } else {
    Toast.show('Request failed.');
  }
}

export function * getReceipt (api, action) {
  const { params } = action
  const token = JSON.parse(yield AsyncStorage.getItem(TOKEN))

  yield put(StartupActions.loadProgress(true));
  const response = yield call(api.getReceipt, token, params);
  yield put(StartupActions.loadProgress(false));
  console.log({response})
  if (response.ok) {
    const temp = path(['data'], response);
    if (temp.code === 200) {
      yield put(ReceiptActions.getReceiptSuccess(temp.payload));
    } else {
      Toast.show(temp.message);
    }
  } else {
    Toast.show('Request failed.');
  }
}

export function * splitBill (api, action) {
  const { params } = action
  const token = JSON.parse(yield AsyncStorage.getItem(TOKEN))

  yield put(StartupActions.loadProgress(true));
  const response = yield call(api.splitBill, token, params);
  yield put(StartupActions.loadProgress(false));
  console.log({response})
  if (response.ok) {
    const temp = path(['data'], response);
    if (temp.code === 200) {
      yield put(ReceiptActions.getSubReceiptSuccess(temp.payload));
    } else {
      Toast.show(temp.message);
    }
  } else {
    Toast.show('Request failed.');
  }
}

export function * loadHistory (api, action) {
  const { params } = action
  const token = JSON.parse(yield AsyncStorage.getItem(TOKEN))
  
  const response = yield call(api.loadHistory, token, params);
  console.log({response})
  // success?
  if (response.ok) {
    const temp = path(['data'], response);
    if (temp.code === 200) {
      yield put(ReceiptActions.getListSuccess(temp.payload));
    } else {
      Toast.show(temp.message);
    }
  } else {
    Toast.show('Request failed.');
  }
}

export function * searchHistory (api, action) {
  const { params } = action
  const token = JSON.parse(yield AsyncStorage.getItem(TOKEN))
  
  const response = yield call(api.searchHistory, token, params);
  console.log({response})
  // success?
  if (response.ok) {
    const temp = path(['data'], response);
    if (temp.code === 200) {
      yield put(ReceiptActions.getListSuccess(temp.payload));
    } else {
      Toast.show(temp.message);
    }
  } else {
    Toast.show('Request failed.');
  }
}

export function * refund (api, action) {
  const { params } = action
  const token = JSON.parse(yield AsyncStorage.getItem(TOKEN))
  
  const response = yield call(api.refund, token, params);
  console.log({response})
  // success?
  if (response.ok) {
    const temp = path(['data'], response);
    if (temp.code === 200) {
      Toast.show('Refund successfuly.');
      yield put(NavigationActions.navigate({ routeName: 'MainScreen' }));
    } else {
      Toast.show(temp.message);
    }
  } else {
    Toast.show('Request failed.');
  }
}