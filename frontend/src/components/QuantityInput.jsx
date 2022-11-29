
 function createOptions(quantity){
    const options = []

    for(let i = 1; i <= quantity; i++)
        options.push(<option key={i} value={i} >{i}</option>)

    return options
}

export default function QuantityInput({quantity, fontSize, setQuantity, value}){

    return (
        <div className="flexRow gap10 alignCenter">
            <label className={`fontSize${fontSize}`}>Quantity</label>
            <select className={`fontSize${fontSize - 1} textCenter`} value={value} onChange={(e) => setQuantity(parseInt(e.target.value))}>
                {createOptions(quantity)}
            </select>
        </div>
    )
}