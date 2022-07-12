import './index.css'

export const ItemInput = ({ itemCount, setItemCount, balance, setBalance, price }) => {

    const handleChange = event => {
        setItemCount(event.target.value)
        let totalPrice = itemCount*price
        setBalance(balance-totalPrice)
    }

    return (
        <div>
            <input 
            className='item-input' 
            type="number"
            value={itemCount}
            onChange={handleChange}
            />
        </div>
    )
}