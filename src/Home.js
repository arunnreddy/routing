import React,{useState} from 'react'
import {Navigate} from "react-router-dom"
import { useParams } from 'react-router-dom'

const Home=()=>{
  const hello=useParams()
 
  const[data,setData]=useState(false)
  if(data){
return <Navigate to ="./Dashboard" />
  }
  return (
    <center style={{margin:"20px"}}>
    <div><h1>WELCOME TO HOME PAGE  {hello.name}</h1></div>
   username: <input type="text" /><br/><br/>
  password:<input type="password" /><br/><br/>
  <button style={{color:"tomato"}} onClick={()=>setData(true)}>Login</button>
    </center>

  )
 

}
export default  Home
