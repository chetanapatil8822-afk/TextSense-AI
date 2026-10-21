# TextSense AI

TextSense AI is a web-based application that analyzes social media text using Natural Language Processing (NLP) and Machine Learning techniques to identify depression-related language patterns.

The application uses a fine-tuned multilingual DistilBERT model and provides a web interface for submitting text and viewing prediction results.

## Features

- Social media text analysis
- Text preprocessing using NLP techniques
- Depression-related text classification
- REST API developed using FastAPI
- Interactive user interface built with React
- Responsive design using Tailwind CSS

## Technology Stack

### Frontend

- React
- Vite
- JavaScript
- Tailwind CSS

### Backend

- Python
- FastAPI
- PyTorch
- Hugging Face Transformers

### Machine Learning

- Multilingual DistilBERT
- Natural Language Processing
- Text classification

## Project Structure

```text
TextSense-AI/
├── backend/
│   ├── app/
│   │   ├── models/
│   │   ├── preprocessing/
│   │   ├── routes/
│   │   └── schemas/
│   ├── model/
│   └── requirements.txt
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   └── services/
│   ├── package.json
│   └── vite.config.js
├── .gitignore
└── README.md
```

## Local Setup

### 1. Clone the Repository

```bash
git clone https://github.com/chetanapatil8822-afk/TextSense-AI.git
cd TextSense-AI
```

### 2. Set Up the Frontend

Open a terminal in the project directory and run:

```bash
cd frontend
npm install
npm run dev
```

Open the local URL displayed by Vite in your browser.

### 3. Set Up the Backend

Open a separate terminal in the project directory and run:

```bash
cd backend
python -m venv venv
```

Activate the virtual environment on Windows:

```cmd
venv\Scripts\activate
```

Install the required dependencies:

```bash
pip install -r requirements.txt
```

Start the FastAPI server:

```bash
python -m uvicorn app.main:app --reload
```

The API documentation is available at:

http://127.0.0.1:8000/docs

## Model Setup

The trained model checkpoint is not included in the GitHub repository because of its large file size. The required model files must be downloaded or configured at the model path expected by the backend before running the application successfully.

## Research Context

TextSense AI is an academic project focused on depression-related text classification using social media data. The associated research investigates cross-platform evaluation using Twitter/X and Reddit, comparing traditional machine learning approaches with a multilingual transformer-based model.

## Disclaimer

TextSense AI is an academic research project. Its predictions are intended for research and informational purposes only. They are not a clinical diagnosis and should not replace professional mental health assessment.

## License

No license has been selected for this repository yet.
