import { configureStore } from "@reduxjs/toolkit";
import rootReducer from './reducers/rootReducer';
import thunk from "redux-thunk";

export const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk],
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;