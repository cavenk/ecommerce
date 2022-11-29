import {configureStore} from "@reduxjs/toolkit"
import { cartSliceReducer } from "./cart/cartSlice"
import { categorySliceReducer } from "./category/categorySlice"
import { errorSliceReducer } from "./error/errorSlice"
import { paymentSliceReducer } from "./payment/paymentSlice"
import { productSliceReducer } from "./product/productSlice"

const store = configureStore({
    reducer: {
        errorSlice : errorSliceReducer,
        productSlice : productSliceReducer,
        categorySlice : categorySliceReducer,
        cartSlice : cartSliceReducer,
        paymentSlice : paymentSliceReducer
    }
})

export default store