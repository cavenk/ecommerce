import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import CartSliceAsync from "../../redux/cart/cartSliceAsyncAction";
import CartDetails from "./CartDetails";
import CartListItem from "./CartListItem";
import CartListLoading from "./CartListLoading";


export default function CartPage(){

    const dispatch = useDispatch()
    const {isLoading, cartList, productList} = useSelector(state => state.cartSlice)
    const [mergedList, setMergedList] = useState([])

    const showData = ()=>{
        if(isLoading)
            return <CartListLoading />

        if(mergedList.length > 0)
            return mergedList.map(e => <CartListItem key={e.id} item={e} />)
        else
            return "Nothing in the cart"
    }

    useEffect(()=>{
        dispatch(CartSliceAsync.getCartItems(cartList))
    }, [])

    useEffect(()=>{
        const list = productList.map(element => {
            const cartItem = cartList.find(e => e.id === element.id)
            return {
                ...element,
                quantity : cartItem.quantity
            }
        })

        setMergedList(list)
    }, [productList, cartList])

    return(
        <main className="space20 gridRow alignStart justifyCenter">
            <div className="span6 flexCol gap20">
                {showData()}
            </div>
            <CartDetails items={mergedList} />
        </main>
    )
}