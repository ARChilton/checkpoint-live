import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
// import { reducer as form } from 'redux-form'
import homePage from '../Routes/HomePage/HomePageState'


export default () => combineReducers({
  routerReducer,
  homePage,
  // form,
})

