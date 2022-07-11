import './index.css'

export const BalanceContainer = ({ balance }) => {
    return(
        <div className='balance-wrapper'>
            <div className='balance-sum'>
                Balance: { balance }$
            </div>
        </div>
    )
}