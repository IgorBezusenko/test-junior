import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {postReducer} from "./reducers/post";

export const reducers = {
    postReducer
}

const rootReducer = combineReducers(reducers)

const setupStore = () => {
    return configureStore({
        reducer: rootReducer,

    });
};

export const store = setupStore();
