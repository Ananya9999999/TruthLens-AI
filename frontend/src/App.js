import React, { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const analyzeText = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://127.0.0.1:8000/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });

      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error("Error:", error);
    }
    setLoading(false);
  };

  const getRiskColor = (risk) => {
    if (risk === "Low") return "#22c55e";
    if (risk === "Medium") return "#facc15";
    if (risk === "High") return "#ef4444";
    return "#ffffff";
  };

  return (
    <div className="container">
      <h1>TruthLens AI</h1>
      <p className="subtitle">Analyze news credibility instantly</p>

      <textarea
        placeholder="Paste news article here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={analyzeText}>
        {loading ? "Analyzing..." : "Analyze"}
      </button>

      {result && (
        <div className="results">
          <div className="card">
            <h3>Authenticity Score</h3>
            <div className="progress">
              <div
                className="progress-fill"
                style={{ width: `${result.authenticity_score}%` }}
              ></div>
            </div>
            <p>{result.authenticity_score}%</p>
          </div>

          <div className="card">
            <h3>Fake Probability</h3>
            <p>{(result.fake_probability * 100).toFixed(2)}%</p>
          </div>

          <div className="card">
            <h3>Manipulation Score</h3>
            <p>{(result.manipulation_score * 100).toFixed(2)}%</p>
          </div>

          <div
            className="card risk"
            style={{ borderColor: getRiskColor(result.risk_level) }}
          >
            <h3>Risk Level</h3>
            <p style={{ color: getRiskColor(result.risk_level) }}>
              {result.risk_level}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;