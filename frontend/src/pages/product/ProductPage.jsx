import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { productSliceAsyncAction } from "../../redux/product/productSliceAsyncAction"
import ProductDetailsLoading from "./ProductDetailsLoading"
import ProductDetails from "./ProductDetails"


export default function ProductPage(){

    const {productID} = useParams()
    const {product, isLoading} = useSelector(state => state.productSlice)
    const dispatch = useDispatch()

    const showProduct = ()=>{

        if(isLoading)
            return <ProductDetailsLoading />
        
        if(product)
            return <ProductDetails product={product} />
    }

    useEffect(()=>{
        dispatch(productSliceAsyncAction.getProductById(productID))
    }, [])

    return (
        <main id="productPage" className="flexCol space20 justifyStart alignCenter">
            {showProduct()}
        </main>
    )
}