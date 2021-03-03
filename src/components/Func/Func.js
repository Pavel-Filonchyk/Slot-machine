import React from 'react'

function Func ({value1, value2, value3, onErase, onRandom, clicks, sum}){  
return (
    <>
        <div className="wrap_counter">
             <div className="counter">
                 <h1>{sum}</h1>
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
                onClick={onRandom}
            >
                <h4>Start</h4>
            </div>
        </div>
        <div className="wrap_erase">
            <div className="erase"
                 onClick={onErase}
            > 
            <p>Clean</p>
            </div>

        </div>
     </>
    
 )
}

export default Func