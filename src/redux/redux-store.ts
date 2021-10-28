import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducers";
import dialogReducer from "./dialog-reducers";
import UsersReducer from "./users-reducer";
import weatherReducer from "./weather-reducer";
import AuthReducer from "./auth-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: dialogReducer,
    usersPage: UsersReducer,
    weatherPage: weatherReducer,
    auth: AuthReducer,
})

let store = createStore(reducers)

export default store;