import React from 'react'
import App from '../App/App'

class Result extends React.Component{
  constructor (props){
    super(props);
    this.state ={
      res: [],
      max1: 0,
      max2: 0,
      max3: 0,
    }
  }
  onEraseR = (body) =>{
    console.log(body)
 
  const postData = async (url, body) => {  
  let res = await fetch(url, {          
      method: "POST",
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "num":  body
      })
  });
  return await res.json();       
};
postData('http://localhost:3000/data', body)   

async function getResource(url) {   
  let resul = await fetch(url) 
    if (!resul.ok) {throw new Error("Error");}
  return await resul.json();       
}
  getResource('http://localhost:3000/data')
  .then((data) => this.setState({res: data}))

  const newData =  this.state.res.sort((a, b) =>{
    let nameA=a.num, nameB=b.num
    return nameB - nameA
    })
    .map(item =>{   
      return Object.values(item).slice(0, 3).slice(0, 1).join(",")    
  })
  
  let num1 =  newData[0];
  let num2 =  newData[1];
  let num3 =  newData[2];
 
  this.setState({
    max1: num1,
    max2: num2,
    max3: num3,
  })
}
  render(){
  const{res, max1, max2, max3}=this.state
  console.log(max1, max2, max3)
  console.log(res)
    
    return(
      <App
        onErase={this.onEraseR}
        max1={max1}
        max2={max2}
        max3={max3}
      />
    )
  }
}
export default Result

