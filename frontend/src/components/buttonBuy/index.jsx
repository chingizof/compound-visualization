import './index.css' 

export const ButtonBuy = ({ itemCount, setItemCount, price, balance, setBalance }) => {
    const handleChange = () => {
        setItemCount(parseInt(itemCount)+1)
        setBalance(parseInt(balance)+price)
    }
    
    return (
        <button 
        className='button-buy'
        onClick={handleChange}>Buy</button>
    )
}