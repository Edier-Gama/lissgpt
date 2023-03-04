import React from "react";
import { Homepage } from "./components/Homepage/Homepage";
import { GoogleGPT } from "./components/Assistant/Assistant";
import { Footer } from "./components/Footer/Footer";
import { Login } from "./components/Login/Login";
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
