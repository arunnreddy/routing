import React from 'react';
import {useParams} from "react-router-dom"

const Dashboard=()=> {
  const dashboard=useParams()
  return (
    <center style={{margin:"20px"}}>
    <div><h1>WELCOME TO DASHBOARD PAGE {dashboard.content}</h1></div>
    </center>
  )
}
export default Dashboard
