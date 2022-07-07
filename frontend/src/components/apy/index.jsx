import './index.css'

export const Apy = () => {
    return (
        <div className='apy-wrapper'>
            <div className='group-button'>
                <span className='apy-text'>APY</span>
                <button>5%</button>
                <button>10%</button>
                <button>15%</button>
                <button>20%</button>
            </div>
            <div className='apy-description'>APY  -  way to measure the amount of money earned on an interest-bearing account, annualized over a year.</div>
        </div>
    )
}