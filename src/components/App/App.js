import React from 'react'
import './App.css';
import './media.css'
import Background from './img/slot_machine.jpg'
import Func from '../Func/Func'


class App extends React.Component{
  constructor (props){
    super(props);
    this.state ={
        value1: "Hola",
        value2: "Hola",
        value3: "Hola",
        sum: 0,
        clicks: 0,
        allClicks: 0,
        couple: false,
        lucky: false,
        jackpot: false,
    }
    this.onRandom = this.onRandom.bind(this);

  }
  onRandom(){
    const num1 = Math.floor(Math.random()*10)
    const num2 = Math.floor(Math.random()*10)
    const num3 = Math.floor(Math.random()*10)
    
    let newValue = {
      value1: num1,
      value2: num2,
      value3: num3 
    } 
    this.setState(newValue)

    let newSum = num1 + num2 + num3
    this.setState({sum: newSum})
    
    let adder = this.state.sum + newSum
    if (this.state.clicks <=30 ){
    this.setState({sum: adder})
    }
    
    let numClicks = this.state.clicks +1
    let all_Clicks = this.state.allClicks +1
    this.setState({clicks: numClicks})
    this.setState({allClicks: all_Clicks})

    if (this.state.clicks === 30){
      this.setState({
        clicks: 0,
        sum: 0,
        value1: 0,
        value2: 0,
        value3: 0,
      })
      this.props.onErase(this.state.sum)
    }

    if (all_Clicks >= 900){
      fetch('http://localhost:3000/data/?', {
        method: "DELETE"
      })
    }
   
    let newCouple = {couple: true}
    let clouser1 = {couple: false}
    let bonus100 = this.state.sum +100
    if (num1 === num2 || num2 === num3){
      this.setState(newCouple)  
      this.setState({sum: bonus100})
    }
    else {this.setState(clouser1)}
    
    let newLucky = {lucky: true}
    let clouser2 = {lucky: false}
    let bonus1000 = this.state.sum +3000
    if (num1 === num2 === num3){
      this.setState(newLucky)  
      this.setState({sum: bonus1000})
    }
    else {this.setState(clouser2)}

    let newJackpot = {jackpot: true}
    let clouser3 = {jackpot: false}
    let jackpot = this.state.sum +50000
    if (num1 === 7 && num2 === 7 && num3 === 7){
      this.setState(newJackpot)  
      this.setState({sum: jackpot})
    }
    else {this.setState(clouser3)}
  }

  render(){
    const {value1, value2, value3, sum, clicks} = this.state
    const {max1, max2, max3} = this.props
    return (
      <div className="d-flex flex-column main" style={{background: `url(${Background}) center center/cover no-repeat`}}>
        <div className="size">
          <div className="center d-flex flex-column">
          
            <div className="wrap_show">
              <div className="show" style={{ display: this.state.couple ? "block" : "none" }}>
                <h3 className="p-size">Bonus +100 !!!</h3>
              </div>
              <div className="show" style={{ display: this.state.lucky ? "block" : "none" }}>
                <h3 className="p-size">!!! LUCKY +3000 </h3>
              </div>
              <div className="show_JACKPOT" style={{ display: this.state.jackpot ? "block" : "none" }}>
                <h3 className="p-size">!!! JACKPOT +50000 !!!</h3>
              </div>
              <div className="show_null"><p></p></div>
            </div>

            <Func 
              value1={value1}
              value2={value2}
              value3={value3}
              clicks={clicks}
              sum={sum}
              onRandom={this.onRandom}
            />

            <div className="wrap_results">
              <div className="d-flex flex-column results">
                <div className="result_place">1 place</div>
                <div className="result_num">{max1}</div>
              </div>
              <div className="d-flex flex-column results">
                <div className="result_place">2 place</div>
                <div className="result_num">{max2}</div>
              </div>
              <div className="d-flex flex-column results">
                <div className="result_place">3 place</div>
                <div className="result_num">{max3}</div>
              </div>
            </div>
          </div>
        </div>
        <footer className = "column contacts">
          <div className = "linc">
            <a className="githab" href="https://github.com/Pavel-Filonchyk"><i class="fab fa-github"></i></a>
          </div>
        </footer>
    </div>
    );
  }
}

export default App;
