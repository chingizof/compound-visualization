import './index.css'
export const InputMoney = ({ money, setMoney }) => {

    const handleChange = event => {
        setMoney(event.target.value)
        console.log(event.target.value)
    }

    return(
        <div className='input-wrapper'>
            <input
            className="input-field"
            type="input"
            onChange={handleChange}
            value={money}
            required="yes" 
            />
        </div>
    )
}