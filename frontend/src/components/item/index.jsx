import './index.css'
import { ButtonBuy } from '../buttonBuy'
import { ButtonSell } from '../buttonSell'
import { ItemInput } from '../itemInput'

export const Item = ({name, price, img}) => {
    price = price.toString()
    price += "$"
    return (
        <div className='item-wrapper'>
            <div className='item-content'>
                <img src={img} alt={name} className='item-img'></img>
                <div className='item-name'>{name}</div>
                <div className='item-cost'>{price}</div>
                <div className='item-controllers'>
                    <ButtonSell />
                    <ItemInput />
                    <ButtonBuy />
                </div>
            </div>
        </div>
    )
}