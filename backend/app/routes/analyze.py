from fastapi import APIRouter, HTTPException

from app.models.predictor import predict_text
from app.schemas.prediction import (
    PredictionRequest,
    PredictionResponse
)


router = APIRouter()


@router.post("/analyze", response_model=PredictionResponse)
def analyze_text(request: PredictionRequest):
    text = request.text.strip()

    if not text:
        raise HTTPException(
            status_code=400,
            detail="Text cannot be empty."
        )

    if len(text) > 500:
        raise HTTPException(
            status_code=400,
            detail="Text must not exceed 500 characters."
        )

    result = predict_text(text)

    return result