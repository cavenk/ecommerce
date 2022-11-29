import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoadingDialog from "../../components/LoadingDialog";
import { errorSliceAction } from "../../redux/error/errorSlice";
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