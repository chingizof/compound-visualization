export const InputYears = ({ years, setYears }) => {

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
