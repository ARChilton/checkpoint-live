import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
// import { reducer as form } from 'redux-form'
import splitter, { getSideMenuItems as pureGetSideMenuItems, getSideMenuState as pureGetSideMenuState } from './../Routes/SplitterState'


export default () => combineReducers({
  routerReducer,
  splitter,
  // form,
})

export const getSideMenuItems = state => pureGetSideMenuItems(state.splitter)

export const getSideMenuState = state => pureGetSideMenuState(state.splitter)
