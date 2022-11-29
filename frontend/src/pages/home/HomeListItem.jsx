import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"


export default function HomeListItem(props){

    const {title, price, image, id, category} = props.item
    const {categoryList} = useSelector(state => state.categorySlice)
    const navigator = useNavigate()

    const getCategoryName = ()=>{
        const item = categoryList.find(value => value.categoryID === category)
        if(item)
            return item.name
    } 

    return (
        <div className="homeListItem flexCol space10 card clickable" onClick={()=> navigator(`/product/${id}`)}>
            <img src={image} alt="product" />
            <p className="fontSize3 oneLine">{title}</p>
            <p className="oneLine"><span>{getCategoryName()}</span></p>
            <p>{price.toFixed(2)}$</p>
        </div>
    )
}