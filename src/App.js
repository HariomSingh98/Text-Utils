import React,{useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';

import {//react router feature 
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  const [mode,setMode]= useState("light");//state of mode state

  const [alert,setAlert] = useState(null);//set the alert for different operation as object with message and type

  const toggleMode= ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#212120'; 
      provideAlert("Dark Mode Enable","Succes");//provide the alert to change of mode
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white'; 
      provideAlert("Light Mode Enable","Succes");
    }
  }

  const provideAlert=(message,type)=>{//set the alert
    setAlert({msg:message,
      type : type
    })
    setTimeout(()=>{//fade the alert after 1 sec
      setAlert(null);
    },"700");
  }
  return (
    <>
    <Router>
    <Navbar title = "textUtils" about="About textUtils" mode={mode} toggle={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-2">
    <Routes>
          <Route exact path="/" element ={<TextForm heading ="Enter the Text" mode={mode} provideAlert={provideAlert}/>}>
          </Route>
          <Route exact path="/about" element={<About mode={mode}/>}>
          </Route>
    </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
