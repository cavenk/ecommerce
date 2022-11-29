import { api_getCategory } from "../../api/api"
import { errorSliceAction } from "../error/errorSlice"
import { categorySliceAction } from "./categorySlice"

export const categorySliceAsyncAction = {

    getCategory : ()=>{
        return async (dispatch, getState) => {
            try{
                // Show loading
                dispatch(categorySliceAction.isLoading(true))

                // Fetch data
                const response = await api_getCategory()

                if(response.status === 200){
                    const data = await response.json()
                    dispatch(categorySliceAction.updateCategoryList(data))
                } else {
                    throw new Error("Unknown error")
                }

            } catch(error){
                // remove loading
                dispatch(categorySliceAction.isLoading(false))

                // set error bar
                dispatch(errorSliceAction.setErrorMessage("An unknown error occured while getting the categories"))
            }
    }
}
}