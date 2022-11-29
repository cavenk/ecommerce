import { createSlice } from "@reduxjs/toolkit";

const paymentSlice = createSlice({
    name : "paymentSlice",

    initialState : {
        isProcessing : false,
        isPaid : null
    },

    reducers : {
        isProcessing : (state, action)=>{
            state.isProcessing = action.payload
        }, 

        updatePaymentResult : (state, action)=>{
            state.isProcessing = false
            state.isPaid = action.payload.isPaid
        },

        reset : (state)=>{
            state.isProcessing = false
            state.isPaid = null
        }
        
    }
})

export const paymentSliceAction = paymentSlice.actions
export const paymentSliceReducer = paymentSlice.reducer