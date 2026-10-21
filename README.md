\# TextSense AI



\*\*TextSense AI\*\* is a web-based application for analyzing social media text using Natural Language Processing (NLP) and Machine Learning.



The project uses a fine-tuned multilingual DistilBERT model to analyze text and generate predictions related to depression.



\## Features



\- Social media text analysis

\- NLP-based text preprocessing

\- Depression-related text classification

\- Prediction API built with FastAPI

\- Interactive web interface built with React

\- Responsive UI using Tailwind CSS



\## Technology Stack



\*\*Frontend\*\*

\- React

\- Vite

\- Tailwind CSS

\- JavaScript



\*\*Backend\*\*

\- Python

\- FastAPI

\- PyTorch

\- Hugging Face Transformers



\*\*Machine Learning\*\*

\- Multilingual DistilBERT

\- Natural Language Processing



\## Project Structure



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



\## Local Setup



\### 1. Clone the repository



```bash

git clone https://github.com/chetanapatil8822-afk/TextSense-AI.git

cd TextSense-AI

```



\### 2. Set up the frontend



```bash

cd frontend

npm install

npm run dev

```



Open the local URL displayed by Vite in your browser.



\### 3. Set up the backend



Open a separate terminal:



```bash

cd backend

python -m venv venv

```



Activate the environment on Windows:



```cmd

venv\\Scripts\\activate

```



Install the required dependencies:



```bash

pip install -r requirements.txt

```



Start the FastAPI server:



```bash

python -m uvicorn app.main:app --reload

```



The API documentation is available at `http://127.0.0.1:8000/docs`.



\*\*Model requirement:\*\* The trained model checkpoint is not included in the GitHub repository yet. The required model files must be made available at the configured model path before the backend can start successfully.



\## Research Context



This project explores depression-related text classification on social media data using NLP and transformer-based models. Its broader research work investigates evaluation across Twitter/X and Reddit.



\## Disclaimer



TextSense AI is an academic research project. Its predictions are not a clinical diagnosis and should not replace professional mental health assessment.



\## License



A license has not been selected for this repository yet.

