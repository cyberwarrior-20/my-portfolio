import React from 'react'
import Toggle from '../Toggle/Toggle'
import Logo from '../../img/logo.png'
import './Navbar.css'
import { Link } from "react-scroll"

function Navbar() {
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name">
                <img src={Logo} alt="" />
            </div>
            <Toggle/>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style={{listStyleType: 'none'}}>
                    <Link spy={true} to='Navbar'  smooth={true}  activeClass="activeClass">
                    <li>Home</li>
                    </Link>
                    
                    <Link spy={true} to='Services'smooth={true}>
                    <li>Services</li>
                    </Link>
                   
                    <Link spy={true} to='Experience'smooth={true}>
                    <li>Experience</li>
                    </Link>
              
                    <Link spy={true} to='Portfolio'smooth={true}> 
                    <li>Portfolio</li>
                    </Link>
              
                </ul>
            </div>

            </div>
        
        </div>
    
  )
}

export default Navbar
