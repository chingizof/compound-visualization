import './index.css'
export const InputYears = ({ years, setYears }) => {

    const handleChange = event => {
        setYears(event.target.value)
        console.log(event.target.value)
    }

    return(
        <div>
            <input
            className="input-field"
            type="input"
            onChange={handleChange}
            value={years}
            required="yes"
            />
        </div>
    )
}
