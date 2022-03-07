import React from 'react'
import "./Style.css"
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    
      <div className="varun">
    <div className="karun">ROUTING</div>
        <div className="arun">
           <Link to="/"><li>HOME</li></Link>
         <Link to="/About"><li>ABOUT</li></Link>
        <Link to="/DaShboard"><li>DASHBOARD</li></Link> 
       
        </div>
      </div>
  
     
  )
}
export default Navbar
