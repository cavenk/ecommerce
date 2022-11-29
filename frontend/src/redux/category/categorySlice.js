import { createSlice } from "@reduxjs/toolkit"

const categorySlice = createSlice({
    name:"categorySlice", 

    initialState : {
        isLoading: false,
        categoryList : []
    },

    reducers:{
        isLoading : (state, action)=>{
            state.isLoading = action.payload
        }, 

        updateCategoryList : (state, action)=>{
            state.isLoading = false
            state.categoryList = action.payload
        }
    }
})

export const categorySliceAction = categorySlice.actions
export const categorySliceReducer =  categorySlice.reducer