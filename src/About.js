import React from 'react'
import {useNavigate} from "react-router-dom"
import { useParams } from 'react-router-dom'
 const About=()=>{
   const hai=useParams()
   const history =useNavigate()
  return (
    <center style={{margin:"20px"}}>
    <div><h1>WELCOME TO ABOUT PAGE :{hai.fullname}</h1></div>
    <button onClick={()=>history("/Dashboard")}>signinn</button>
    </center>
  )
}
export default About
