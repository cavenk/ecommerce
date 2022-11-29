import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStartOutline } from "@fortawesome/free-regular-svg-icons";
import Rating from "react-rating";


export default function RatingStar(props){

    const {rating} = props

    return(
        <Rating 
            readonly
            fractions={2}
            initialRating={rating}
            emptySymbol={<FontAwesomeIcon icon={faStartOutline}/>}
            fullSymbol={<FontAwesomeIcon style={{color: "rgb(255, 226, 52)"}} icon={faStar} />}
            />
    )
}