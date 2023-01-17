import React from "react";
import Editor from "@monaco-editor/react";
import {getCompletion } from "../api/getCompletion";
import { useState, useEffect } from 'react';

function App() {
  const [code, setCode] = React.useState()
  const prompt = `dime la definición de este código: ${code}`
  const apikey = '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'
  function submitCode() {
    async function getCompletionData() {
      const completionText = getCompletion(apikey, prompt)
      const result = await completionText;
      setCodeExplain(result);
    }
    getCompletionData();
  }
  const [codeExplain, setCodeExplain] = useState(null);

  return (
    <div className="App">
      <header className="App-header" style={{width: '100%', margin: 'auto'}}>
        <Editor
        height='70vh'
        theme="vs-dark"
        defaultLanguage="javascript"
        onChange={(event) => setCode(event)}
        />
        <button onClick={submitCode}></button>
        <p>{codeExplain}</p>
      </header>
    </div>
  );
 
}




export default App;
