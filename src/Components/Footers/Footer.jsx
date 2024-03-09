import React from 'react'
import './Footer.css'
import Youtube from '@iconscout/react-unicons/icons/uil-youtube'
import GitHub from '@iconscout/react-unicons/icons/uil-github'
import VsCode from '@iconscout/react-unicons/icons/uil-visual-studio'

import Wave from './../../img/wave.png'

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
      
        <div className="column">
          <a href='https://www.youtube.com/@PraphullChandra'><Youtube color="black" size="3rem" /></a>
          <a href="https://github.com/cyberwarrior-20"><GitHub color="black" size="3rem" /></a>
          <a href='https://code.visualstudio.com/download'><VsCode color="black" size="3rem" /></a>
         </div>
         <div className="pop">
      <span style={{color:'black'}}>@Website|2024|Developed By:-PraphullChandra</span>
       
      </div>


      </div>


    </div>


  )
}

export default Footer
