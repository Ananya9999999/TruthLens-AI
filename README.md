<h1>🧠 TruthLens AI</h1>


AI-Powered Fake News & Manipulation Detector

TruthLens AI is a multi-layer AI system that analyzes news content and evaluates its authenticity using transformer-based classification, emotional manipulation detection, and explainable scoring.

Built for hackathon demonstration with real NLP models and clean full-stack architecture.

<h2>🚀 Features</h2>

✅ Transformer-based Fake News Classification (BERT)

✅ Emotional Manipulation Detection (Sentiment Analysis)

✅ Sentence-Level Flagging

✅ Weighted Authenticity Score (0–100%)

✅ Risk Level Categorization (Low / Medium / High)

✅ Full Stack (FastAPI + React)

✅ Explainable Output

<h2>🏗 Architecture Overview</h2>

```
User Input → Backend API →
1️⃣ Fake News Classifier
2️⃣ Manipulation Detection
3️⃣ Score Aggregation Engine
→ Authenticity Score + Flagged Sentences
```
<h2>🧠 How It Works</h2>


<h3>1️⃣ Fake News Detection</h3>

Uses a fine-tuned BERT-based transformer model to classify the content as real or fake and generate probability scores.

<h3>2️⃣ Manipulation Detection</h3>

🔹Performs sentence-level sentiment analysis to detect:

🔹Highly emotional wording

🔹Sensational tone

🔹Negative bias patterns

<h3>3️⃣ Score Aggregation</h3>

Final Authenticity Score is computed as:

Authenticity = 1 − (0.7 × Fake Probability + 0.3 × Manipulation Score)

<h2>📊 Example Output</h2>

```
{
  "authenticity_score": 34.5,
  "risk_level": "High",
  "fake_probability": 0.81,
  "manipulation_score": 0.62,
  "flagged_sentences": [
    "Breaking! This shocking discovery will change everything!"
  ]
}
```

<h2>🛠 Tech Stack</h2>

<h3>Backend</h3>

🔹FastAPI

🔹HuggingFace Transformers

🔹PyTorch

🔹NLTK

🔹NumPy

<h3>Frontend</h3>

🔹React.js

🔹Axios

<h2>⚙️ Installation</h2>

<h3>1️⃣ Clone Repository</h3>
```
git clone https://github.com/yourusername/TruthLens-AI.git
cd TruthLens-AI
```
<h3>2️⃣ Backend Setup</h3>
```
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

Backend runs on:

```
http://127.0.0.1:8000
```
<h3>3️⃣ Frontend Setup</h3>
```
cd frontend
npm install
npm start
```

Frontend runs on:

```
http://localhost:3000
```

<h2>🎯 Use Cases</h2>

🔹Social media misinformation detection

🔹News credibility scoring

🔹Educational awareness tools

🔹Media literacy platforms

🔹Browser extension integration (future scope)

<h2>🔮 Future Enhancements</h2>

🔹 Live URL scraping

🔹 Fact-check API integration

🔹 Source credibility scoring

🔹 Multi-language support

🔹 Deepfake image detection

🔹 Browser extension
