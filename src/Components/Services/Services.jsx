import React from 'react'
import './Services.css'
import Heartemoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card';
import { themeContext } from '../../Context'
import { useContext } from 'react'

const Services = () => {
    const theme=useContext(themeContext);
    const darkMode= theme.state.darkMode;
  return (
    <div className="services" id='Services'>
            {/*left side*/}
            <div className='awesome'>
                <span style={{color: darkMode? 'white': ''}}>My Awesome</span>
                <span>Services</span>

                <div className='blur s-blurl' style={{ background: "#ABF1FF94" }}></div>

            </div>
             {/*right side */}
             <div className="cards">
                {/* first card */}
                  <div style={{ left: "14rem" }}>
                    <Card
                        emoji={Heartemoji}
                        heading={"Developer Tools"}
                        detail={"GitHub, VsCode, Canva"} />
                        
                        
                </div>
                
                 {/* second card */}
                 <div style={{ top: "12rem", left: "-4rem" }}>
                    <Card
                        emoji={Glasses}
                        heading={"Language"}
                        detail={" Html/Css , Javscript , React, Python"} />
                </div>
                {/*3rd */}
                <div style={{ top: "19rem", left: "12rem" }}>
                    <Card
                        emoji={Humble}
                        heading={"Framework"}
                        detail={"React, Django, API"} />



                </div>
                
                

                

                </div>
                </div>
   
  )
}

export default Services
