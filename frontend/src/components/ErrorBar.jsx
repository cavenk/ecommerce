import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { errorSliceAction } from "../redux/error/errorSlice"

export default function ErrorBar(){

    const {errorMessage} = useSelector(state => state.errorSlice)
    const dispatch = useDispatch()
    let timeout = null

    const onClick = () => {
        clearTimeout(timeout)
        timeout = null

        dispatch(errorSliceAction.resetErrorMessage())
    }

    const classNames = () => {
        let names = "errorBar justifySelfCenter flexRow space10 justifyBetween alignCenter"

        if(!errorMessage)
            names += " notVisible"

        return names
    }

    useEffect(() =>{
        if(errorMessage)
            timeout = setTimeout(() => {
                dispatch(errorSliceAction.resetErrorMessage())
            }, 5000)

    }, [errorMessage])

    return (
        <div className={classNames()}>
            <p>{errorMessage}</p>
            <button onClick={onClick}>OK</button>
        </div>
    )
}