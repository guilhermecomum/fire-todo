import { auth } from './firebase/firebase'
import {reset} from 'redux-form';

export const signUp = (email, password) => {
  return dispatch => {
    dispatch({ type: 'SIGN_UP_REQUEST' })
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(authUser => {
        dispatch({
          type: 'SIGN_UP_SUCCESS',
          authUser,
        })
      })
      .catch(error => {
        dispatch({
          type: 'SIGN_UP_FAILURE',
          error,
        })
      })
    dispatch(reset('signUp'))
  }
}
