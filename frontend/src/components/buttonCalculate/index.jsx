import './index.css'
import { calculateBalance } from '../../calculator.js'

export const ButtonCalculate = ({ money, years, apy, setBalance }) => {

    const handleClick = () => {
        setBalance(calculateBalance(money, money, years, apy))
    }

    return (
        <button className='button-1' onClick={handleClick}>Calculate</button>
    )
}