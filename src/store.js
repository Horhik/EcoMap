import { createStore } from 'redux'
import mainReducer from "./redusers/main-reducer";
const store = createStore(mainReducer);
export default store