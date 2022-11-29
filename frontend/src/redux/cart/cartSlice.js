import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name : "cartSlice",

    initialState : {
        isLoading : false,
        cartList : [],
        productList : []
    },

    reducers : {
        isLoading : (state, action)=>{
            state.isLoading = action.payload
        },

        addItem : (state, action)=>{
            const newItem = action.payload

            // verify if item is already in cart
            const index = state.cartList.findIndex((value)=> value.id === newItem.id)
            
            // If item exist already in cart, update the quantity
            // else add it to the cart
            if(index !== -1)
                state.cartList[index] = newItem
            else
                state.cartList.push(newItem)

            state.isLoading = false
        }, 

        removeItem: (state, action)=>{
            state.cartList = state.cartList.filter(value => value.id !== action.payload)
            state.productList = state.productList.filter(value => value.id !== action.payload)
        }, 

        updateProductList : (state, action)=>{
            state.isLoading = false
            state.productList = action.payload
        }, 

        reset : (state)=>{
            state.isLoading = false
            state.cartList = []
            state.productList = []
        }
       
    }
})

export const cartSliceAction = cartSlice.actions
export const cartSliceReducer = cartSlice.reducer