import './App.css';
// import About from './components/About';

import Navbar from './components/Navbar.js'
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react'

// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   Routes
// } from "react-router-dom";


function App() {
  const[mode, setMode] = useState('light')
  const[alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message, 
      type: type
    })
    setTimeout(() =>
    {
      setAlert(null)
    },3000)
  }
  const toggleMode = ()=> {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = "grey"
      showAlert("Dark mode has been enabled", "success")
    }
    else
    {
      setMode('light')
      document.body.style.backgroundColor = "white"
      showAlert("Light mode has been enabled", "success")
    }

  }
  return (
    <>
     {/* <Router> */}
        <Navbar  home = "Home" mode = {mode} toggleMode = {toggleMode}/>
        <Alert alert = {alert}/>
        <div className="container my-3">
          <TextForm heading = "Enter the Text"/>
          {/* <About/> */}
          {/* <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<TextForm heading="Enter the text to analyze below"/>} />
          </Routes> */}
        </div>
    {/* </Router> */}
    </>

  );
}

export default App;
