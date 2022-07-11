import {useState} from 'react'

export const InputMoney = () => {
    const[money, setMoney] = useState(100)

    const handleChange = event => {
        setMoney(event.target.value)
        console.log(event.target.value)
    }

    return(
        <div>
            <input
            type="text"
            onChange={handleChange}
            value={money}>
            </input>
        </div>
    )
}