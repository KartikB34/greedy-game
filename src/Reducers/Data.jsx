import {createReducer} from "@reduxjs/toolkit"

const initialstate = {}
export const dataReducer = createReducer(initialstate,{

    dataRequest:(state) =>{
        state.loading = true
    },

    dataSuccess: (state, action) => {
        state.loading = false
        state.data = action.payload;
    },

    dataFailure: (state, action) => {
        state.loading = false
        state.error = action.payload
    },

    clearError: (state) => {
        state.error = null
    }

})