import { configureStore, combineReducers } from "@reduxjs/toolkit";
import developersReducer from "./slices/developers";
import qualitiesReducer from "./slices/qualities";

const rootReducer = combineReducers({
    developers: developersReducer,
    qualities: qualitiesReducer
});

export function createStore() {
    return configureStore({
        reducer: rootReducer,
        devTools: process.env.NODE_ENV !== "production"
    });
}
