import { call, put } from 'redux-saga/effects'
import Toast from 'react-native-simple-toast'
import { AsyncStorage } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { path } from 'ramda'
import EmployeeActions from '../Redux/EmployeeRedux'
import StartupActions from '../Redux/StartupRedux';

import { TOKEN } from '../Services/Constant'

export function * login (api, action) {
  const { params } = action

  yield put(StartupActions.loadProgress(true));
  const response = yield call(api.login, params);
  yield put(StartupActions.loadProgress(false));

  if (response.ok) {
    const temp = path(['data'], response);
    if (temp.code === 200) {
      yield AsyncStorage.setItem(TOKEN, JSON.stringify(temp.payload.token));
      yield put(EmployeeActions.employeeSuccess(temp.payload));

      yield put(NavigationActions.navigate({ routeName: 'MainScreen' }));
    } else {
      Toast.show(temp.message);
    }
  } else {
    Toast.show('Request failed.');
  }

}
