from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from transformers import pipeline
import nltk
from nltk.tokenize import sent_tokenize
import numpy as np

nltk.download('punkt')

app = FastAPI()

# Enable CORS (important for frontend)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load models (load once)
fake_news_model = pipeline(
    "text-classification",
    model="mrm8488/bert-tiny-finetuned-fake-news-detection"
)

sentiment_model = pipeline("sentiment-analysis")

class NewsInput(BaseModel):
    text: str


def analyze(text):
    sentences = sent_tokenize(text)

    fake_result = fake_news_model(text[:512])[0]
    fake_score = fake_result["score"] if fake_result["label"] == "Fake" else 1 - fake_result["score"]

    flagged_sentences = []
    emotional_scores = []

    for sentence in sentences:
        sent_result = sentiment_model(sentence[:512])[0]
        if sent_result["label"] == "NEGATIVE" and sent_result["score"] > 0.7:
            flagged_sentences.append(sentence)
            emotional_scores.append(sent_result["score"])

    manipulation_score = np.mean(emotional_scores) if emotional_scores else 0

    authenticity = 1 - (0.7 * fake_score + 0.3 * manipulation_score)
    authenticity = round(authenticity * 100, 2)

    risk = "High" if authenticity < 40 else "Medium" if authenticity < 70 else "Low"

    return authenticity, fake_score, manipulation_score, risk, flagged_sentences


@app.post("/analyze")
def analyze_news(news: NewsInput):
    authenticity, fake_score, manipulation_score, risk, flagged = analyze(news.text)

    return {
        "authenticity_score": authenticity,
        "fake_probability": round(fake_score, 3),
        "manipulation_score": round(manipulation_score, 3),
        "risk_level": risk,
        "flagged_sentences": flagged
    }