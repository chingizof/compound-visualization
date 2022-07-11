import './index.css'
import { calculateBalance } from '../../calculator.js'

export const ButtonCalculate = () => {

    // function calculate(e) {
    //     e.preventDefault()
    //     calculateBalance(2000000, 20, 2000000, 5)
    // }

    return (
        <button className='button-1' onClick={()=>calculateBalance(2000000, 200000, 20, 5)}>Calculate</button>
    )
}