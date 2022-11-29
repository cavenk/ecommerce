import { api_getCartItems } from "../../api/api";
import { errorSliceAction } from "../error/errorSlice";
import { cartSliceAction } from "./cartSlice";


export default class CartSliceAsyncAction{

    static getCartItems(cartList){
        return async (dispatch, getState)=>{
            try{
                // show loading
                dispatch(cartSliceAction.isLoading(true))

                // fetch data
                const response = await api_getCartItems(cartList)

                if(response.status === 200){
                    const data = await response.json()
                    dispatch(cartSliceAction.updateProductList(data))

                } else{
                    throw new Error("An unknown error occured")
                }
                
            } catch(error){
                // set loading to false
                dispatch(cartSliceAction.isLoading(false))

                // Set error message
                dispatch(errorSliceAction.setErrorMessage("An unknown error occured"))
            }
        }
    }
}