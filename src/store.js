import { configureStore } from "@reduxjs/toolkit";
import { appReducer, dataReducer } from "./Reducers/Data";

const store = configureStore({
    reducer:{
        data: dataReducer,
        apps: appReducer
    }
})

export default store