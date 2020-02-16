import {combineReducers} from 'redux'
import mapReducer from "./map-reducer";
const mainReducer = combineReducers({maps: mapReducer})
export default mainReducer