import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";



export default function LoadingDialog(){

    return (
        <div className="loadingDialog flexRow justifyCenter alignCenter">
            <div className="card flexCol space20 alignCenter">
                <FontAwesomeIcon className="spinner" icon={faCircleNotch}/>
                <p className="fontSize3">Loading...</p>
            </div>
        </div>
    )
}