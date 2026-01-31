# yeaga collector api

FastAPI service for data ingestion and control.

## Run (venv)
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
