import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'

import app from '../reducer'

const reducers = {
  form,
  app
}

const rootReducer = combineReducers(reducers)
export default rootReducer
