🧠 TruthLens AI

AI-Powered Fake News & Manipulation Detector

TruthLens AI is a multi-layer AI system that analyzes news content and evaluates its authenticity using transformer-based classification, emotional manipulation detection, and explainable scoring.

Built for hackathon demonstration with real NLP models and clean full-stack architecture.

🚀 Features

✅ Transformer-based Fake News Classification (BERT)

✅ Emotional Manipulation Detection (Sentiment Analysis)

✅ Sentence-Level Flagging

✅ Weighted Authenticity Score (0–100%)

✅ Risk Level Categorization (Low / Medium / High)

✅ Full Stack (FastAPI + React)

✅ Explainable Output

🏗 Architecture Overview
```
User Input → Backend API →
1️⃣ Fake News Classifier
2️⃣ Manipulation Detection
3️⃣ Score Aggregation Engine
→ Authenticity Score + Flagged Sentences
```
🧠 How It Works

1️⃣ Fake News Detection

Uses a fine-tuned BERT-based transformer model to classify the content as real or fake and generate probability scores.

2️⃣ Manipulation Detection

🔹Performs sentence-level sentiment analysis to detect:

🔹Highly emotional wording

🔹Sensational tone

🔹Negative bias patterns

3️⃣ Score Aggregation

Final Authenticity Score is computed as:

Authenticity = 1 − (0.7 × Fake Probability + 0.3 × Manipulation Score)

📊 Example Output

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

🛠 Tech Stack
Backend

🔹FastAPI

🔹HuggingFace Transformers

🔹PyTorch

🔹NLTK

🔹NumPy

Frontend

🔹React.js

🔹Axios

⚙️ Installation
1️⃣ Clone Repository
```
git clone https://github.com/yourusername/TruthLens-AI.git
cd TruthLens-AI
```
2️⃣ Backend Setup
```
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

Backend runs on:

```
http://127.0.0.1:8000
```
3️⃣ Frontend Setup
```
cd frontend
npm install
npm start
```

Frontend runs on:

```
http://localhost:3000
```

🎯 Use Cases

🔹Social media misinformation detection

🔹News credibility scoring

🔹Educational awareness tools

🔹Media literacy platforms

🔹Browser extension integration (future scope)

🔮 Future Enhancements

🔹 Live URL scraping

🔹 Fact-check API integration

🔹 Source credibility scoring

🔹 Multi-language support

🔹 Deepfake image detection

🔹 Browser extension