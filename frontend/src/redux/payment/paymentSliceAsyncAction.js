import { api_pay } from "../../api/api"
import { cartSliceAction } from "../cart/cartSlice"
import { errorSliceAction } from "../error/errorSlice"
import { paymentSliceAction } from "./paymentSlice"

export const paymentSliceAsyncAction = {
    pay : (cartList)=>{
        return async(dispatch, getState)=>{
            try{
                // set processing
                dispatch(paymentSliceAction.isProcessing(true))

                // fetch data
                const response = await api_pay(cartList)

                if(response.status === 200){
                    const data = await response.json()
                    dispatch(paymentSliceAction.updatePaymentResult(data))
                    dispatch(cartSliceAction.reset())

                } else{
                    throw new Error("An unknown error occured on payment")
                }

            } catch(error){
                // set processing to false
                dispatch(paymentSliceAction.isProcessing(false))
                // set error message
                dispatch(errorSliceAction.setErrorMessage("An unknown error occured on payment"))
            }
        }
    }

}