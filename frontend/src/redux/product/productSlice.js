import { createSlice } from "@reduxjs/toolkit"


const productSlice = createSlice({
    name: "productSlice",

    initialState: {
        isLoading: false,
        productList : [],
        product : null
    },

    reducers: {
        isLoading : (state, action)=>{
            state.isLoading = action.payload
        },

        updateProductList : (state, action)=>{
            state.isLoading = false
            state.productList = action.payload
        }, 

        updateProduct : (state, action)=>{
            state.isLoading = false
            state.product = action.payload
        }
    }
})

export const productSliceAction = productSlice.actions
export const productSliceReducer =  productSlice.reducer

