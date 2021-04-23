import { createStore, combineReducers } from 'redux'
import todoReducer from './todoReducer'

const reducers = combineReducers({
  todoReducer
})
const store = createStore(reducers)

export default store