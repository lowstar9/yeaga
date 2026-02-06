from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

from app.api.routes import router
from app.core.config import settings
from app.core.logging import setup_logging

# Initialize logging before app creation.
print("Logging Level: " + settings.fastapi_log_level)
setup_logging(settings.fastapi_log_level)
app = FastAPI(title="yeaga collector api")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(router)

if __file__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True, log_level="debug")
