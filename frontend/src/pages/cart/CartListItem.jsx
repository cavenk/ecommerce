import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import QuantityInput from "../../components/QuantityInput"
import { cartSliceAction } from "../../redux/cart/cartSlice"




export default function CartListItem(props){

    const {title, price, image, id, quantity} = props.item
    const dispatch = useDispatch()

    const removeItem = ()=>{
        dispatch(cartSliceAction.removeItem(id))
    }

    const onQuantityChange = (quantity)=>{
        const cartItem = {id, quantity}
        
        dispatch(cartSliceAction.addItem(cartItem))
    }

 
    return(
        <div className="cartItem card flexRow space10">
            <img src={image} />
            <div className="flexCol gap10">
                <p className="oneLine">
                    <Link className="aColorBlack aHoverBlack fontSize3" to={`/product/${id}`}>{title}</Link>
                </p>
                <div className="flexRow gap10 alignCenter justifyBetween">
                    <p>Price : {price.toFixed(2)}$</p>
                    <QuantityInput fontSize="2" quantity="15" value={quantity} setQuantity={onQuantityChange} />
                    <button className="buttonErrorNoBackground" onClick={removeItem}>Remove</button>
                </div>
            </div>
        </div>
    )
}