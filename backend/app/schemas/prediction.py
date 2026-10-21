from pydantic import BaseModel


class PredictionRequest(BaseModel):
    text: str


class PredictionResponse(BaseModel):
    prediction: str
    label: int
    confidence: float
    model: str