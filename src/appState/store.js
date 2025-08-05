import { combineReducers, createStore } from "redux";
import { SidebarAnimationStatusReducer, userDataStatusReducer, userLoginStatusReducer } from "./reducer";

const rootReducer = combineReducers(
    {
        loginState: userLoginStatusReducer,
        userDataState: userDataStatusReducer,
        sidebarAnimationState: SidebarAnimationStatusReducer
    }
);

const store = createStore(rootReducer);

export default store;
