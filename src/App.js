import React from "react";
import { Route, Routes, HashRouter } from "react-router-dom";
import { Homepage } from "./app/Homepage/Homepage";
import { AppExplainer } from "./app/CodeExplainer/Explainer";
import '../styles/App.css'

function App() {
  return (
    <React.Fragment>
      <HashRouter>
        <Homepage/>
         <Routes>
           <Route path='/code-explain' element={<AppExplainer/>}/>
         </Routes>
      </HashRouter>
    </React.Fragment>
  )
}


export default App;
