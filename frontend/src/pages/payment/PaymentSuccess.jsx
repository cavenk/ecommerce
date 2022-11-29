import { useNavigate } from "react-router-dom"


export default function PaymentSuccess(){
    const navigate = useNavigate()

    const onClick = ()=>{
        navigate("/")
    }

    return(
        <div className="flexCol space20 alignCenter">
            <p className="fontSize4">Your payment is successful!</p>
            <button className="buttonColorPositive" onClick={onClick}>Return to home page</button>
        </div>
    )
}