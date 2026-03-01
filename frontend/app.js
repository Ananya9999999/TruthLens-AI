import React, { useState } from "react";
import axios from "axios";

function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);

  const analyzeNews = async () => {
    const response = await axios.post("http://127.0.0.1:8000/analyze", {
      text: text
    });
    setResult(response.data);
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>🧠 AI Fake News Detector</h1>

      <textarea
        rows="8"
        cols="80"
        placeholder="Paste news article here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <br /><br />

      <button onClick={analyzeNews}>Analyze</button>

      {result && (
        <div style={{ marginTop: "30px" }}>
          <h2>Results</h2>
          <p><strong>Authenticity Score:</strong> {result.authenticity_score}%</p>
          <p><strong>Risk Level:</strong> {result.risk_level}</p>
          <p><strong>Fake Probability:</strong> {result.fake_probability}</p>
          <p><strong>Manipulation Score:</strong> {result.manipulation_score}</p>

          <h3>⚠ Flagged Sentences</h3>
          <ul>
            {result.flagged_sentences.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;