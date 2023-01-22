import React from "react"
import { getCompletion } from "../../api/getCompletion";
import { useState } from 'react';
import { API_KEY } from "../../api/apikey";
import Editor from "@monaco-editor/react";

function AppExplainer(){ 

  const [code, setCode] = React.useState()
  const prompt = `escribe este codigo: ${code} y abajo ponle lo que hace`
  const apikey = API_KEY

  function sendCode(event) {
    setCode(event.target.value)
    console.log(code);
  }
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
      
      <section className="results-section">
      <Editor
        width='100%'
        height='400px'
        className="editor"
        defaultLanguage="javascript"
        theme='vs-dark'
        onChange = {(event) => sendCode(event)}
      />
        <button
         onClick = {submitCode}
         className = ''
        >Explain
        </button>
        <p>{codeExplain}</p>
      </section>
    </div>
  );
 
}

export {AppExplainer}