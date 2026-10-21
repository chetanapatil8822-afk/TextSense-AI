import re
import unicodedata


def clean_social_text(text: str) -> str:
    """
    Apply the same basic preprocessing used in the research pipeline.

    Preserves:
    - hashtags
    - punctuation
    - emojis
    - stopwords
    - negations
    - slang
    - repeated letters
    """

    text = str(text)

    # Unicode normalization
    text = unicodedata.normalize("NFKC", text)

    # Replace URLs with URL token
    text = re.sub(
        r"https?://\S+|www\.\S+",
        " URL ",
        text
    )

    # Replace @mentions with USER token
    text = re.sub(
        r"@\w+",
        " USER ",
        text
    )

    # Normalize whitespace
    text = re.sub(
        r"\s+",
        " ",
        text
    ).strip()

    return text