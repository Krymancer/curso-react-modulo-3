import {GET_BOOKS} from './actionsTypes'; 
import { combineReducers } from 'redux'

const bookReducer = (state: InitialState = {books: [], query: ""}, action: BookAction) : any => {
  switch(action.type){

    case GET_BOOKS:
      return {
          ...state,
          books: [...action.payload],
          loading:false
      }

    default: return state
  }
}

export default combineReducers({
  books: bookReducer
});