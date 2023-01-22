import { configureStore, combineReducers } from "@reduxjs/toolkit";
import developersReducer from "./slices/developers";

const rootReducer = combineReducers({
    developers: developersReducer
});

export function createStore() {
    return configureStore({
        reducer: rootReducer,
        devTools: process.env.NODE_ENV !== "production"
    });
}
