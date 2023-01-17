import React from "react";
import { useCompletion } from "../api/getCompletion";


function App() {

  const { responseText } = useCompletion()
  console.log(responseText);
  return (
    <div className="App">
      <header className="App-header">
        <h1>{responseText}</h1>
      </header>
    </div>
  );
}

export default App;
