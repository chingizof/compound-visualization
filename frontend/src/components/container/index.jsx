import { useState } from 'react';
import './index.css'
import { ButtonCalculate } from '../buttonCalculate'
import { Item } from '../item'
import {items} from "../../data/items" 
import { Apy } from '../apy'
import { InputYears } from '../inputYears'
import { InputMoney } from '../inputMoney'
import { BalanceContainer } from '../balanceContainer';

export const Container =  () => {

    const [money, setMoney] = useState(500);
    const [years, setYears] = useState(20)
    const [apy, setApy] = useState(15)
    const [balance, setBalance] = useState(757977)

    return (
        <div className='container'>
            <div className='container-description'>
                <h1 className='container-text'>If you invest <InputMoney money={money} setMoney={setMoney} /> every month, in <InputYears years={years} setYears={setYears} /> years you can buy...</h1>
                <ButtonCalculate money={money} years={years} apy={apy} setBalance={setBalance}/>
            </div>
            <Apy apy={apy} setApy={setApy} />
            <BalanceContainer balance={balance}/>
            <div className='items'>
                {items.map((item)=>(
                <Item balance={balance} setBalance={setBalance} key={item.name} name={item.name} price={item.price} img={item.img}/> 
                ))}
            </div>
        </div>
    )
}
