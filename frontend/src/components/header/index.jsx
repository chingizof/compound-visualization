import './index.css'



<div className='header-wrapper'>
        <div className='header-name'></div>
      </div>

export const Header = () => {
    return (
        <div className="header-wrapper">
               <div className="header-text">
                <h1>Compound</h1> 
                <h1 className="header-purple">Interest </h1>
                <h1>Calculator</h1>
            </div>
        </div>
    )
}