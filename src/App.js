import './App.css';
import {Error} from './components/Error'
import { Navbar } from './components/Navbar'
import { Home } from './components/Home';
import NoteState from './context/notes/NoteState';
import { Alert } from './components/Alert';
import React, { useState } from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";
import { SignUp } from './components/SignUp';
import { Login } from './components/Login';
function App() {
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
  return (
    <>
      <NoteState>
        <Navbar />
        <Alert alert={alert}/>
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home showAlert={showAlert}/>} />
            <Route exact path="login" element={<Login showAlert={showAlert} />} />
            <Route exact path="signup" element={<SignUp showAlert={showAlert}/>} />
            <Route exact path="*" element={<Error showAlert={showAlert}/>} />
            
          </Routes>
        </div>
      </NoteState>
    </>
  );
}

export default App;
