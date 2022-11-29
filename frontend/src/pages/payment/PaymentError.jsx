import { useNavigate } from "react-router-dom"


export default function PaymentError(){
    const navigate = useNavigate()

    const onClick = ()=>{
        navigate("/cart")
    }

    return(
        <div className="flexCol space20 alignCenter">
            <p className="fontSize4">Unable to process payment.</p>
            <button className="buttonColorPositive" onClick={onClick}>Return to cart page</button>
        </div>
    )
}