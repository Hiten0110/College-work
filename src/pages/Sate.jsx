// import React, { Component } from 'react'

// export class Sate extends Component {
//     constructor(){
//         super()
//         this.state={
//             count:0

//         }
//         this.handleDecrement=this.handleDecrement.bind(this)
//     }
//     handleIncrement(){
//       this.setState({
//         count:this.state.count+1
//       })
//     }
//     handleDecrement(){
//       this.setState({
//         count:this.state.count-1
//       })
//     }
//   render() {
//     const {count} = this.state
//     return (
//       <div>
//         <h2>This is State full Component</h2>
//         <h3>Count: {this.state["count"]}</h3>
//         {/* <button onClick={()=>this.setState({count:count+1})}>Increment</button>
//         <button onClick={this.handleDecrement}>Decrement</button> */}
//         <button onDoubleClick={this.handleIncrement.bind(this)}>Increment</button>
//         <button onClick={this.handleDecrement}>Decrement</button>
//       </div>
//     )
//   }
// }

// export default Sate

import { useState } from 'react'
import { Instagram } from 'react-feather'
import Conditional from './Conditional'
import { ToastContainer, toast } from 'react-toastify';




export default function Sate() {
  const [count, setCount] = useState(0)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleDecrement = () => {

    if (count > 0) {
      setCount(count - 1)

    }
    else {
      toast("The number should not be less then 0")

    }

  }
  const handleIncrement = () => {

    if (count < 4) {
       toast("Not more then 4")
    }
    else {
      setCount(count + 1)
     

    }
  }
  const handleSubmit = async(x)=> {
    x.preventDefault()
    // console.log({ email: email, password: password })
    // localStorage.setItem("users", JSON.stringify({ email: email, password: password }))
  const req = await fetch("https://reqres.in/api/login",{
    method:"POST",
    headers:{
      "x-api-key": "reqres_d5f07ee8487547da86ffab50962bc7d7",
      "content-type":"application/json"
    },
    body: JSON.stringify({email,password})

  })
  const data=await req.json()
  if(data.token){
    window.location="https://www.netlify.com"
  }
  else{
    console.log(data)
  }
}
  let data = localStorage.getItem("users")
  let json = JSON.parse(data);
  console.log(json.email)
  return (
    <div data-aos="zoom-in-down">
      <h2>{count}</h2>

      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>



      <Instagram stroke='rgb(255,0,0)' />
      <h2>"email": "eve.holt@reqres.in", "password": "cityslicka"</h2>

      <form onSubmit={handleSubmit}>
        Email <input className='border' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        Password <input className='border' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />


        <button type="submit">Submit</button>


      </form>
      <div className='card w-100 h-50 bg-blue-300' >
        <h4>Test message</h4>
      </div>
      <Conditional />
      <ToastContainer position="top-center"/>
    </div>

  )
}

