import React from 'react'
import SwitchNavigator from "./navigation/SwitchNavigator.js"
import {createStore, applyMiddleware} from 'redux'
import reducer from './reducers'
import {Provider} from 'react-redux'
import {logger} from 'redux-logger'
import {ThunkMiddleware} from 'redux-thunk'
const middleWare = applyMiddleware(ThunkMiddleware, logger);
const store = createStore(reducer);

export default class App extends React.Component{
  render(){
    return(
      <Provider store = {store}>
      <SwitchNavigator/>
      </Provider>
      );
  }
}