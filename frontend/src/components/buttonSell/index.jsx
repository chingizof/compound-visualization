import './index.css'

export const ButtonSell = ({ itemCount, setItemCount, price, setBalance, balance }) => {
    const handleChange = () => {
        if (itemCount>0) {
            setItemCount(parseInt(itemCount)-1)
        }
        setBalance(parseInt(balance)-price)
    }

    return (
        <button 
        className='button-sell'
        onClick={handleChange}>Sell</button>
    )
}