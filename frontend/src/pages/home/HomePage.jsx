import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useSearchParams } from "react-router-dom"
import { productSliceAsyncAction } from "../../redux/product/productSliceAsyncAction"
import HomeListItem from "./HomeListItem"
import HomeListLoading from "./HomeListLoading"


export default function HomePage(){

    const [params] = useSearchParams()
    const dispatch = useDispatch()
    const {isLoading, productList} = useSelector(state => state.productSlice)
    const category = params.get("category")

    const showData = ()=>{
        if(isLoading)
            return <HomeListLoading />
        
        if(productList.length > 0)
            return productList.map(item => <HomeListItem key={item.id} item={item} />)
    }

    useEffect(()=>{
        dispatch(productSliceAsyncAction.getProduct(category))
    }, [category])

    return(
        <main id="homePage" className="flexRow space20 justifyCenter alignStart">
            {showData()}
        </main>
    )
}