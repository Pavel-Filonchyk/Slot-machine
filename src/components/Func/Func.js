import React from 'react'

function Func ({value1, value2, value3, onErase, onRandom, clicks, sum, result}){  

return (
    <>
        <div className="wrap_counter">
             <div className="counter">
                 <h2>{sum}</h2>
             </div>
        </div>
        <div className="wrap_click_value">
            <div className="click_value">
                <h3>{clicks}</h3>
            </div>
        </div>
        <div
            className="wrap_automat">
            <div className="automat"><h1>{value1}</h1></div>
            <div className="automat"><h1>{value2}</h1></div>
            <div className="automat"><h1>{value3}</h1></div>
        </div>
        <div className="wrap_circle">
            <div 
                className="circle"
                onClick={() => onRandom()}
            >
                <h3>Start</h3>
            </div>
        </div>
     </>
 )
}
export default Func