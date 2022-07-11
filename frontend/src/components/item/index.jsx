import './index.css'
import { ButtonBuy } from '../buttonBuy'
import { ButtonSell } from '../buttonSell'
import { ItemInput } from '../itemInput'
import { useState } from 'react'

export const Item = ({name, price, img, balance, setBalance}) => {
    const [itemCount, setItemCount] = useState(0)
    price = price.toString()
    let priceTag = price+"$"

    return (
        <div className='item-wrapper'>
            <div className='item-content'>
                <img src={img} alt={name} className='item-img'></img>
                <div className='item-name'>{name}</div>
                <div className='item-cost'>{priceTag}</div>
                <div className='item-controllers'>
                    <ButtonSell setItemCount={setItemCount} itemCount={itemCount} balance={balance} setBalance={setBalance} price={price} />
                    <ItemInput itemCount={itemCount} setItemCount={setItemCount} balance={balance} setBalance={setBalance} price={price}/>
                    <ButtonBuy setItemCount={setItemCount} itemCount={itemCount} balance={balance} setBalance={setBalance} price={price} />
                </div>
            </div>
        </div>
    )
}