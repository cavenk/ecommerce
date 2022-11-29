import { createSlice } from "@reduxjs/toolkit"

const errorSlice = createSlice({
    name: "errorSlice",

    initialState: {
        errorMessage : null    
    },

    reducers: {
        setErrorMessage : (state, action)=>{ 
            state.errorMessage = action.payload
        },

        resetErrorMessage : (state)=>{
            state.errorMessage = null
        }
    }
})

export const errorSliceAction = errorSlice.actions
export const errorSliceReducer =  errorSlice.reducer
