import './index.css'
import { ButtonCalculate } from '../buttonCalculate'
import { Item } from '../item'
import {items} from "../../data/items" 

export const Container =  () => {
    return (
        <div className='container'>
            <div className='container-description'>
                <h1 className='container-text'>If you start investing ___$ every month, in ___ years you can buy...</h1>
                <ButtonCalculate />
            </div>
            <div className='items'>
                {items.map((item)=>(
                <Item key={item.name} name={item.name} price={item.price} img={item.img}/> 
                ))}
            </div>
        </div>
    )
}
