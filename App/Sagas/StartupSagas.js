import { put, select } from 'redux-saga/effects'
import { is } from 'ramda'
import { AsyncStorage } from 'react-native'
import StartupActions from '../Redux/StartupRedux'
import { NavigationActions } from 'react-navigation'
import { TOKEN } from '../Services/Constant'
// process STARTUP actions
export function* startup(action) {

}

export function* isLogin(action) {
  // yield AsyncStorage.clear()
  const token = JSON.parse(yield AsyncStorage.getItem(TOKEN))
  
  if(token !== null){
    yield put(StartupActions.checkLogin(true))
    yield put(NavigationActions.navigate({ routeName: 'Drawer'} ));
  }
  else{
    yield put(StartupActions.checkLogin(false))
  }
}
