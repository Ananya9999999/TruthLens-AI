import React, { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const analyzeText = async () => {
    const response = await fetch("http://localhost:8000/analyze", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });

    const data = await response.json();
    setResult(JSON.stringify(data));
  };

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>TruthLens AI</h1>

      <textarea
        rows="6"
        cols="60"
        placeholder="Enter news text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <br /><br />

      <button onClick={analyzeText}>Analyze</button>

      <h3>Result:</h3>
      <p>{result}</p>
    </div>
  );
}

export default App;