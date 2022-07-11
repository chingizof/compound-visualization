
export const InputMoney = ({ money, setMoney }) => {

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