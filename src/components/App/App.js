import React from 'react'
import './App.css';
import Func from '../Func/Func'
import Background from './img/slot_machine.jpg';

class App extends React.Component{
  constructor (props){
    super(props);
    this.state ={
        value1: "Hola",
        value2: "Hola",
        value3: "Hola",
        sum: 0,
        clicks: 0,
        couple: false,
        lucky: false,
        jackpot: false,
        display: "none"
    }
    this.onRandom = this.onRandom.bind(this);
    this.onErase = this.onErase.bind(this);
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
    let allSum = {sum: newSum}
    this.setState(allSum)
    
    if (this.state.clicks <=20 ){
    let adder = this.state.sum + newSum
    this.setState({sum: adder})
    }
    if (this.state.clicks >=20){
      this.setState({sum: 0})
    }
    
    let numClicks = this.state.clicks +1
    let allClicks = {clicks: numClicks}
    this.setState(allClicks)
    if (this.state.clicks == 20){
      this.setState({
        clicks: 0,
        sum: 0,
        value1: 0,
        value2: 0,
        value3: 0 
      })
    }

    let newCouple = {couple: true}
    let clouser1 = {couple: false}
    let bonus100 = this.state.sum +100
    if (num1 === num2 ||  num1 === num3 || num2 === num3){
      this.setState(newCouple)  
      this.setState({sum: bonus100})
    }
    else {this.setState(clouser1)}
    
    let newLucky = {lucky: true}
    let clouser2 = {lucky: false}
    let bonus1000 = this.state.sum +1000
    if (num1 === num2 === num3){
      this.setState(newLucky)  
      this.setState({sum: bonus1000})
    }
    else {this.setState(clouser2)}

    let newJackpot = {jackpot: true}
    let clouser3 = {jackpot: false}
    let jackpot = this.state.sum +10000
    if (num1 === 7 && num2 === 7 && num3 === 7){
      this.setState(newJackpot)  
      this.setState({sum: jackpot})
    }
    else {this.setState(clouser3)}
  }

  onErase(){
    this.setState({
        clicks: 0,
        sum: 0,
        value1: 0,
        value2: 0,
        value3: 0 
      })
    }
  render(){
    let rezult1 = ""; 
    let rezult2 = ""; 
    let rezult3 = "";
    if(this.state.clicks ==20){
      rezult1 = 
      <div className="results"><p>{this.state.sum}</p></div>;
      rezult2 =
      <div className="results"><p>{this.state.sum}</p></div>;
      rezult3 = 
      <div className="results"><p>{this.state.sum}</p></div>
    }

    const {value1, value2, value3, sum, clicks, couple} = this.state

    return (
      <div className="main" style={{background: `url(${Background}) center center/cover no-repeat`}}>
        <div className="size">
        <Func 
          value1={value1}
          value2={value2}
          value3={value3}
          clicks={clicks}
          couple={couple}
          sum={sum}
          onErase={this.onErase}
          onRandom={this.onRandom}
        />
        <div className="wrap_show">
          <div className="show" style={{ display: this.state.couple ? "block" : "none" }}>
            <h3>Bonus +100 !!!</h3>
          </div>
          <div><p></p></div>
        </div>
        <div className="wrap_results">
          <div className="results"></div>
          <div className="results"></div>
          <div className="results"></div>
        </div>
        </div>
        <footer className = " colomn contacts">
        <div className = "linc">
          <a className="githab" href="https://github.com/Pavel-Filonchyk"><i class="fab fa-github"></i></a>
        </div>
      </footer>
      
    </div>
    );
  }
}

export default App;
