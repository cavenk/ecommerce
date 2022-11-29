import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PaymentLoading(){

    return(
        <div className="flexCol space20 alignCenter">
            <FontAwesomeIcon className="spinner" icon={faCircleNotch}/>
        <p className="fontSize4">Payment Processing...</p>
    </div>
    )
}