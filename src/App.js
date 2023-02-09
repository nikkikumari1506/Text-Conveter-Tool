//import  { useState } from 'react'
import './App.css';
import About from './Component/About';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';
import React, { useState } from 'react';
import Alert from './Component/Alert';
import Footer from './Component/Footer';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
        setAlert({
          msg: message,
          type: type
        })
        setTimeout(() => {
          setAlert(null);
        }, 1500);
  }
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode ('dark')
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled", "Success")
    }
    else{
      setMode ('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "Success")
    }
  }
  return (
    <>
    <div className='page-container'>
      <div className='content-wrap'>

     
    </div>
   {/*<Navbar/>*/}
   <Navbar title="Text Converter Tool" mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
   <div className="container">
   {/*<About/>*/}
      <TextForm showAlert={showAlert} heading = "Enter the text to analyse below " mode={mode}/> 
      <About/>
   </div>
   </div>
  
   <Footer/>
   </>
  );
}

export default App;
