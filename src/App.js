import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Intro from "./Components/Intro/Intro";
import Services from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";
import Contact from "./Components/Contacts/Contact";
import Footer from "./Components/Footers/Footer";
import Portfolio from "./Components/Portfolio/Portfolio";
import {themeContext} from './Context'
import {useContext} from 'react'



function App() {
  const theme=useContext(themeContext)
  const darkMode=theme.state.darkMode;
    return (
      <div className="App"
      style={{
        background: darkMode? 'black':'',
        color: darkMode? 'white':''
      }}>
        <Navbar/>
        <Intro/>
       <Services/>
       <Experience/>
       <Portfolio/>
       <Contact/>
       <Footer/>
      
       
      
      </div>
   
    
  )
}

export default App;
