import {combineReducers} from "redux";

const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
          return { value: state.value + 1 }
        case 'DECREMENT':
          return { value: state.value - 1 }
        default:
          return state
      }
    }
    
const user = (state = {}, action) => {
    switch (action.type) {
      case 'UPDATE_NAME':
            return{...state, name: action.payload}
            case 'UPDATE_EMAIL':
            return{...state, email: action.payload}
            case 'UPDATE_PASSWORD':
            return{...state, password: action.payload}
            case 'CONFIRM_PASSWORD':
            return{...state, cpassword: action.payload}
        default: 
            return state
    }
}

export default combineReducers({counter, user})