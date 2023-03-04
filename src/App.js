import React from "react";
import { Homepage } from "./app/Homepage/Homepage";
import { GoogleGPT } from "./app/Assistant/Assistant";
import { Footer } from "./app/Footer/Footer";
import { Login } from "./app/Login/Login";
import { Route, Routes, HashRouter } from "react-router-dom";
import './styles/Assistant.css'

function App() {
  return (
    <>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/chat" element={<GoogleGPT/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </HashRouter>
    <Footer/>
    </>
  )
}


export default App;
