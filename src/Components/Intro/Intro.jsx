import React from 'react'
import './Intro.css'
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import crown from '../../img/crown.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import glassesimoji from '../../img/glassesimoji.png'
import { themeContext } from '../../Context'
import { useContext } from 'react'



function Intro() {

    
    const theme=useContext(themeContext);
  const darkMode= theme.state.darkMode;
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span style={{color: darkMode? 'white': ''}} >Hi! I'M</span>
                    <span>Praphull Chandra</span>
                    <span>"Web Developer/Machine Learning"</span>
                </div>
               
                <div className="i-icons">

                    <a href='https://github.com/cyberwarrior-20'>
                        <img src={Github} alt="" /></a>
                    <a href="https://www.linkedin.com/feed/">
                        <img src={LinkedIn} alt="icons" /></a>
                    <a href='https://instagram.com/___cyber.warrior___?igshid=YmMyMTA2M2Y='>
                        <img src={Instagram} alt="" /></a>
                </div>
            </div>
            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={boy} alt="" />
                <img src={glassesimoji} alt=''></img>
                <div style={{ top: '-20%', left: '55%' }}>
                    <FloatingDiv image={crown} txt1="Web" txt2="Developer" />
                </div>
                <div style={{ top: '18rem', left: '0rem' }}>
                    <FloatingDiv image={thumbup} txt1='Front-End Developer' />
                </div>
                <div className="blur" style={{ background: "rbg(238 210 255)" }}></div>
                <div className='blur' style={{background:'#C1F5ff' ,top:'17rem',width:'21rem',height:'11rem',left:'-9rem'}}>
                
                </div>
            </div>
        </div>
    )
}

export default Intro
