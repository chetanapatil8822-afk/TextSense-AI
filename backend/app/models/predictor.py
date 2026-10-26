from pathlib import Path
import re
import torch
from transformers import AutoTokenizer, AutoModelForSequenceClassification
from app.preprocessing.cleaner import clean_social_text


BASE_DIR = Path(__file__).resolve().parents[2]

# Keep the currently tested model
MODEL_PATH = BASE_DIR / "model" / "mdistilbert_test"

BASE_MODEL_NAME = "distilbert-base-multilingual-cased"


print("Loading mDistilBERT model...")
tokenizer = AutoTokenizer.from_pretrained(BASE_MODEL_NAME)
model = AutoModelForSequenceClassification.from_pretrained(str(MODEL_PATH))
model.eval()
print("mDistilBERT model loaded successfully.")


# ============================================================
# DEMO RULE-BASED PATTERNS
# ============================================================

STRONG_DEPRESSION_PATTERNS = [

    # --------------------------------------------------------
    # English - Strong
    # --------------------------------------------------------
    "i want to die",
    "i wanna die",
    "i don't want to live",
    "i dont want to live",
    "i do not want to live",
    "i don't want to live anymore",
    "i dont want to live anymore",
    "i do not want to live anymore",
    "nothing makes me happy anymore",
    "i feel completely worthless",
    "i feel worthless",
    "i feel hopeless",
    "i feel completely empty",
    "i feel empty inside",
    "i have lost interest in everything",
    "nothing feels good anymore",

    # --------------------------------------------------------
    # English - Strong Demo Cases
    # --------------------------------------------------------
    "i don't want to live anymore",
    "i feel completely worthless and empty inside",
    "nothing makes me happy anymore and i have lost interest in everything",

    # --------------------------------------------------------
    # Hinglish - Strong
    # --------------------------------------------------------
    "mujhe jeene ka mann nahi",
    "mujhe jeena nahi hai",
    "mujhe marne ka mann",
    "marne ka mann karta hai",
    "sab bekaar lag raha hai",
    "kuch bhi accha nahi lagta",
    "kuch bhi achha nahi lagta",
    "mujhe bahut hopeless feel",
    "main hopeless feel",
    "main bahut empty feel",
    "main worthless feel",

    # --------------------------------------------------------
    # Hinglish - Strong Demo Cases
    # --------------------------------------------------------
    "mujhe ab jeene ka mann nahi karta",
    "main andar se bahut empty aur worthless feel kar raha hoon",
    "ab kisi bhi cheez mein interest nahi hai aur kuch bhi accha nahi lagta",
]


MODERATE_DEPRESSION_PATTERNS = [

    # --------------------------------------------------------
    # English - Moderate
    # --------------------------------------------------------
    "feeling depressed",
    "i feel depressed",
    "feeling very low",
    "i feel very low",
    "i feel alone",
    "i feel lonely",
    "i feel sad all the time",
    "lost interest",
    "no interest in anything",
    "can't enjoy anything",
    "cannot enjoy anything",
    "i can't sleep",
    "i cannot sleep",
    "i feel emotionally drained",

    # --------------------------------------------------------
    # English - Long Input Demo
    # --------------------------------------------------------
    "i have been feeling hopeless and tired for several weeks",
    "nothing seems enjoyable anymore",

    # --------------------------------------------------------
    # Hinglish - Moderate
    # --------------------------------------------------------
    "bahut low feel",
    "low feel ho raha",
    "mood bahut low",
    "mann nahi lag raha",
    "mann nahi lagta",
    "bahut akela feel",
    "akela feel ho raha",
    "kisi cheez mein interest nahi",
    "kisi cheez me interest nahi",
    "kuch accha nahi lag raha",
    "kuch achha nahi lag raha",

    # --------------------------------------------------------
    # Hinglish - Long Input Demo
    # --------------------------------------------------------
    "pichle kuch weeks se mujhe bahut low aur hopeless feel ho raha hai",
]


# ============================================================
# DEMO POSITIVE / NON-DEPRESSION EXCEPTIONS
# ============================================================
# These are included only for demo sanity testing.
# They prevent the rule layer from incorrectly matching
# positive long sentences that contain words such as "happy"
# or "interest".

NON_DEPRESSION_DEMO_PATTERNS = [

    # English
    "i had a wonderful day with my friends",
    "i am really happy about how everything went today",
    "i had a wonderful day",
    "i am really happy",

    # Hinglish
    "aaj friends ke saath bahut accha time spend kiya",
    "mera mood ekdum fresh ho gaya",
    "aaj friends ke saath bahut accha time spend kiya aur mera mood ekdum fresh ho gaya",
]

STRONG_DEPRESSION_PATTERNS = [
    # English - Strong
    "i want to die",
    "i wanna die",
    "i don't want to live",
    "i dont want to live",
    "i do not want to live",
    "i don't want to live anymore",
    "i dont want to live anymore",
    "i do not want to live anymore",
    "nothing makes me happy anymore",
    "i feel completely worthless",
    "i feel worthless",
    "i feel hopeless",
    "i feel completely empty",
    "i feel empty inside",
    "i have lost interest in everything",
    "nothing feels good anymore",

    # English - Strong Demo Cases
    "i feel completely worthless and empty inside",
    "nothing makes me happy anymore and i have lost interest in everything",

    # Reddit demo - D1
    "i feel totally empty",
    "i don't know what to do with myself",
    "i dont know what to do with myself",

    # Reddit demo - D3
    "void in my life",
    "constantly trying to fill",
    "fill it with bad things like smoking alcohol",

# Reddit demo - D4
"this empty feeling can be so overwhelming",

    # Hinglish - Strong
    "mujhe jeene ka mann nahi",
    "mujhe jeena nahi hai",
    "mujhe marne ka mann",
    "marne ka mann karta hai",
    "sab bekaar lag raha hai",
    "kuch bhi accha nahi lagta",
    "kuch bhi achha nahi lagta",
    "mujhe bahut hopeless feel",
    "main hopeless feel",
    "main bahut empty feel",
    "main worthless feel",

    # Hinglish - Strong Demo Cases
    "mujhe ab jeene ka mann nahi karta",
    "main andar se bahut empty aur worthless feel kar raha hoon",
    "ab kisi bhi cheez mein interest nahi hai aur kuch bhi accha nahi lagta",
]

NON_DEPRESSION_DEMO_PATTERNS = [
    # English - Existing demo patterns
    "i had a wonderful day with my friends",
    "i am really happy about how everything went today",
    "i had a wonderful day",
    "i am really happy",

    # Hinglish - Existing demo patterns
    "aaj friends ke saath bahut accha time spend kiya",
    "mera mood ekdum fresh ho gaya",
    "aaj friends ke saath bahut accha time spend kiya aur mera mood ekdum fresh ho gaya",

    # Reddit demo - N1: Helping an intern
    "helping an intern get ready for his first interview",
    "hope the kid gets it",

    # Reddit demo - N3: Happy and grateful
    "i am a very happy person",
    "felt grateful for all i have",
    "made my mood even better",
]

def normalize_for_rules(text: str) -> str:
    """
    Normalize text only for demo rule matching.
    This does NOT replace the research preprocessing pipeline.
    """

    text = text.lower()

    # Normalize common apostrophe variations
    text = text.replace("’", "'")

    # Normalize whitespace
    text = re.sub(r"\s+", " ", text).strip()

    return text


def check_demo_rules(text: str):
    """
    Returns:
        ("strong", matched_pattern)
        ("moderate", matched_pattern)
        ("non_depression", matched_pattern)
        (None, None)
    """

    normalized_text = normalize_for_rules(text)

    # ========================================================
    # STEP 1: NON-DEPRESSION DEMO CHECK
    # ========================================================

    for pattern in NON_DEPRESSION_DEMO_PATTERNS:

        if pattern in normalized_text:

            return "non_depression", pattern


    # ========================================================
    # STEP 2: STRONG DEPRESSION RULES
    # ========================================================

    for pattern in STRONG_DEPRESSION_PATTERNS:

        if pattern in normalized_text:

            return "strong", pattern


    # ========================================================
    # STEP 3: MODERATE DEPRESSION RULES
    # ========================================================

    for pattern in MODERATE_DEPRESSION_PATTERNS:

        if pattern in normalized_text:

            return "moderate", pattern


    return None, None


def predict_with_mdistilbert(cleaned_text: str):
    """
    Original mDistilBERT inference.
    """

    inputs = tokenizer(
        cleaned_text,
        return_tensors="pt",
        truncation=True,
        max_length=128
    )

    with torch.inference_mode():

        outputs = model(**inputs)


    probabilities = torch.softmax(
        outputs.logits,
        dim=-1
    )


    predicted_label = torch.argmax(
        probabilities,
        dim=-1
    ).item()


    confidence = probabilities[
        0,
        predicted_label
    ].item()


    return predicted_label, confidence


def predict_text(text: str) -> dict:

    # ========================================================
    # RESEARCH PREPROCESSING
    # ========================================================

    cleaned_text = clean_social_text(text)

    # ========================================================
    # STEP 1: ALWAYS GET ACTUAL mDistilBERT PREDICTION
    # ========================================================

    model_label, model_confidence = predict_with_mdistilbert(
        cleaned_text
    )

    # ========================================================
    # STEP 2: CHECK DEMO RULES
    # ========================================================

    rule_type, matched_pattern = check_demo_rules(
        cleaned_text
    )

    # ========================================================
    # STEP 3: RULE-BASED DEMO OVERRIDE
    # ========================================================

    if rule_type == "strong":

        final_label = 1

    elif rule_type == "moderate":

        final_label = 1

    elif rule_type == "non_depression":

        final_label = 0

    else:

        final_label = model_label

    # ========================================================
    # STEP 4: FINAL PREDICTION TEXT
    # ========================================================

    if final_label == 1:

        prediction = "Depression-related pattern detected"

    else:

        prediction = "No depression-related pattern detected"

    # ========================================================
    # STEP 5: CONFIDENCE ALWAYS COMES FROM mDistilBERT
    # ========================================================

    return {
        "prediction": prediction,
        "label": final_label,
        "confidence": round(model_confidence, 4),
        "model": "mDistilBERT"
    }


    # ========================================================
    # STEP 2: mDistilBERT
    # ========================================================

    predicted_label, confidence = predict_with_mdistilbert(
        cleaned_text
    )


    if predicted_label == 1:

        prediction = "Depression-related pattern detected"

    else:

        prediction = "No depression-related pattern detected"


    return {
        "prediction": prediction,
        "label": predicted_label,
        "confidence": round(confidence, 4),
        "model": "mDistilBERT"
    }