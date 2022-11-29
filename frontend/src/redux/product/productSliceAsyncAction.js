import { api_getAllProduct, api_getProductByCategory, api_getProductById } from "../../api/api"
import { errorSliceAction } from "../error/errorSlice"
import { productSliceAction } from "./productSlice"

export const productSliceAsyncAction = {

    getProduct : (category)=>{
        return async (dispatch, _) =>{
            try{
                // Show loading
                dispatch(productSliceAction.isLoading(true))
    
                // Fetch data
                let response = null
    
                if(category)
                    response = await api_getProductByCategory(category)
                else
                    response = await api_getAllProduct()
    
                if(response.status === 200){
                    const data = await response.json()
                    dispatch(productSliceAction.updateProductList(data))
    
                } else {
                    throw new Error("An unknown error occured")
                }
    
            } catch(error){
                // set loading to false
                dispatch(productSliceAction.isLoading(false))
    
                //set toast message
                dispatch(errorSliceAction.setErrorMessage("An unknown error occured while getting products")) 
            }
        }
    }, 

    getProductById : (id)=>{
        return async (dispatch, getState)=>{
            try{
                // show loading
                dispatch(productSliceAction.isLoading(true))
    
                // fetch data
                const response = await api_getProductById(id)
    
                if(response.status === 200){
                    const data = await response.json()
                    dispatch(productSliceAction.updateProduct(data))
    
                } else {
                    throw new Error("An unknown error occured")
                }
    
            } catch(error){
                // set loading to false
                dispatch(productSliceAction.isLoading(false))
    
                // set toast message
                dispatch(errorSliceAction("An unknown error occured while getting product"))
            }
        }
    }
}
