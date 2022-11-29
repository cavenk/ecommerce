import { useSelector } from "react-redux";
import PaymentError from "./PaymentError";
import PaymentLoading from "./PaymentLoading";
import PaymentSuccess from "./PaymentSuccess";

export default function PaymentPage(){
    const {isProcessing, isPaid} = useSelector(state => state.paymentSlice)

    const showData = ()=>{
        if(isProcessing)
            return <PaymentLoading />

        if(isPaid)
            return <PaymentSuccess/>

        return <PaymentError/>
    }


    return(
        <main className="flexRow space20 justifyCenter alignStart">
            {showData()}
        </main>
    )
}