import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { paymentSliceAsyncAction } from "../../redux/payment/paymentSliceAsyncAction"

function calculateTotal(items){
    
    let quantity = 0
    let subTotal = 0
    let taxes = 0
    let total = 0

    if(items)
        for(let element of items){
            quantity += element.quantity
            subTotal += element.quantity * element.price
        }

    taxes = subTotal * 0.15
    total = subTotal + taxes

    return {
        quantity,
        subTotal,
        taxes,
        total
    }

}

export default function CartDetails({items}){

    const { quantity, subTotal, taxes, total } = calculateTotal(items)
    const {cartList} = useSelector(state => state.cartSlice)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onClick = ()=>{
        dispatch(paymentSliceAsyncAction.pay(cartList))
        navigate("/payment")
    }

    const showButton = ()=>{
        if(items.length > 0)
            return <button className="buttonColorPositive" onClick={onClick}>Buy now</button>
    }


    return (
        <div className="span4 flexCol space20 card">
            <h3>Summary</h3>
            <p className="fontSize3">{quantity + " Item(s)"}</p>
            <p><b>Sub-Total : </b>{subTotal.toFixed(2) + " $"}</p>
            <p><b>Taxes : </b>{taxes.toFixed(2) + " $"}</p>
            <p><b>Total : </b>{total.toFixed(2) + " $"}</p>
            {showButton()}
        </div>
    )
}