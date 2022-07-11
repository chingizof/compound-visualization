import './index.css'

export const ItemInput = ({ itemCount, setItemCount, balance, setBalance, price }) => {

    const handleChange = event => {
        setItemCount(event.target.value)
        console.log(price)
        let totalPrice = itemCount*price
        console.log('totalPrice:', totalPrice)
        setBalance(balance-totalPrice)
        console.log(event.target.value)
    }

    return (
        <div>
            <input 
            className='item-input' 
            type="number"
            value={itemCount}
            onChange={handleChange}
            ></input>
        </div>
    )
}