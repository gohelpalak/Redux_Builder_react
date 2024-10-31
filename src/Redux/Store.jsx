import {createStore,combineReducers} from "redux"
import { EmployeReducer } from "./Reducer/EmployeReducer"

const RootStore=combineReducers({
    emp:EmployeReducer
})



let store=createStore(RootStore)
export default store
