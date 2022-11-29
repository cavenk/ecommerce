import { useState } from "react"
import { useDispatch } from "react-redux"
import RatingStar from "../../components/RatingStar"
import QuantityInput from "../../components/QuantityInput"
import { cartSliceAction } from "../../redux/cart/cartSlice"

export default function ProductDetails(props){


    const{ id, title, price, description, image, rating } = props.product
    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch()

    const addItem = ()=> dispatch(cartSliceAction.addItem({id, quantity}))

    return( 
            <div className="productDetails w60 flexCol gap20">
                <img src={image} />

                <div className="flexCol gap10">
                    <h3>{title}</h3>
                    <RatingStar rating={rating.rate} />
                    <p className="fontSize3">{price.toFixed(2)} $</p>
                </div>
                <p>{description}</p>

                <div className="flexRow justifyCenter">
                    <QuantityInput quantity="15" fontSize="3" setQuantity={setQuantity}/>
                </div>

                <button className="buttonColorPositive" onClick={addItem} >Add to cart</button>
            </div>
    )
}