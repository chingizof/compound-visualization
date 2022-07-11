import './index.css'

export const Apy = ({ apy, setApy }) => {
    
    const handleChange5 = () => {
        setApy(5)
    }

    const handleChange10 = () => {
        setApy(10)
    }

    const handleChange15 = () => {
        setApy(15)
    }

    const handleChange20 = () => {
        setApy(20)
    }

    return (
        <div className='apy-wrapper'>
            <div className='group-button'>
                <span className='apy-text'>APY</span>
                <button onClick={handleChange5} >5%</button>
                <button onClick={handleChange10} >10%</button>
                <button onClick={handleChange15} >15%</button>
                <button onClick={handleChange20} >20%</button>
            </div>
            <div className='apy-description'>APY  -  way to measure the amount of money earned on an interest-bearing account, annualized over a year.</div>
        </div>
    )
}