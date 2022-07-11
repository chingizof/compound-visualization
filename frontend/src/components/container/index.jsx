import './index.css'
import { ButtonCalculate } from '../buttonCalculate'
import { Item } from '../item'
import {items} from "../../data/items" 
import { Apy } from '../apy'
import { InputYears } from '../inputYears'
import { InputMoney } from '../inputMoney'

export const Container =  () => {

    // const [money, setMoney] = useState(100)
    // const [years, setYears] = useState(1)

    // let periodSum = document.getElementById('money').innerHTML
    // console.log(periodSum)
    // let periodYears = document.getElementById('years')
    // console.log(periodYears)
    return (
        <div className='container'>
            <div className='container-description'>
                <h1 className='container-text'>If you invest <InputMoney /> every month, in <InputYears /> years you can buy...</h1>
                <ButtonCalculate />
            </div>
            <Apy />
            <div className='items'>
                {items.map((item)=>(
                <Item key={item.name} name={item.name} price={item.price} img={item.img}/> 
                ))}
            </div>
        </div>
    )
}
