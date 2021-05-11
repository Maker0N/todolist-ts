import { createStore, combineReducers } from 'redux'
import todoReducer from './todoReducer'

const reducers = combineReducers({
  todoReducer
})

export type ReducersType = ReturnType<typeof reducers>

const store = createStore(reducers)

export default store