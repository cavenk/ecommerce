import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { Link, useSearchParams } from "react-router-dom"
import { categorySliceAsyncAction } from "../../redux/category/categorySliceAsyncAction"

export default function MainHeader(){ 

    const [params] = useSearchParams()
    const dispatch = useDispatch()
    const {categoryList} = useSelector(state => state.categorySlice)
    const {cartList} = useSelector(state => state.cartSlice)
    const category = params.get("category")

    const showCategory = () => {
        return categoryList.map(item => <Link key={item.categoryID} className={"aColorWhite aHoverBlack fontSize3 " + (category == item.categoryID ? "selected" : null)} to={`/?category=${item.categoryID}`} >{item.name}</Link>)

    }

    useEffect(()=>{
        dispatch(categorySliceAsyncAction.getCategory())
    }, [])

    return(
        <header className="mainHeader">
            <div className="flexRow space20 alignCenter justifyBetween"> 
                <Link to="/"><h2 className="logo">App</h2></Link>
                <Link to="/cart" className="fontSize3 cartPageButton aColorWhite">
                    {cartList.length}
                    <FontAwesomeIcon icon={faShoppingCart} />
                </Link>
            </div>
            <nav className="flexRow space10 justifyEvenly">
                <Link className={"aColorWhite aHoverBlack fontSize3 " + (category === null ? "selected" : null)} to="/" >All</Link>
                {showCategory()}
            </nav>
        </header>
    )

}

