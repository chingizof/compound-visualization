import {useState} from 'react'

export const InputYears = () => {
    const[years, setYears] = useState(20)

    const handleChange = event => {
        setYears(event.target.value)
        console.log(event.target.value)
    }

    return(
        <div>
            <input
            type="text"
            onChange={handleChange}
            value={years}>
            </input>
        </div>
    )
}

