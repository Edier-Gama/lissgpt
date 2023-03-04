import React from "react"
import { getCompletion } from "../../api/getCompletion";
import { useState } from 'react';

function GoogleGPT(){ 

  const [text, setText] = React.useState()
  const prompt = `qué significa: ${text}`
  const apikey = '123'

  function sendText(event) {
    setText(event.target.value)
  }
  function submitText() {
    async function getCompletionData() {
      const completionText = getCompletion(apikey, prompt)
      const result = await completionText;
      setSearchResult(result);
    }
    getCompletionData();
  }
  const [searchResult, setSearchResult] = useState(null);
  const [loading, setLoading] = React.useState(false)
  

  const className = loading ? 'results loading': 'results'

  return (
    <div className="App">
      <section className="search-section">
        <h1>Google GPT</h1>
        <input onChange={(event) => sendText(event)} placeholder='Busca algo...'/>
        <button onClick={submitText}>🔍</button>
        <div className={className}>
           <p>{searchResult}</p>
        </div>
      </section>
    </div>
  );
 
}

export {GoogleGPT}