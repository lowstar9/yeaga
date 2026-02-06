from pathlib import Path

from pydantic import Field
from pydantic_settings import BaseSettings


ROOT_DIR = Path(__file__).resolve().parents[4]


class Settings(BaseSettings):
    database_url: str
    opendart_api_key: str | None = None
    environment: str = "local"
    fastapi_log_level: str = Field(default="DEBUG", alias="FASTAPI_LOG_LEVEL")

    class Config:
        env_file = ROOT_DIR / ".env"
        env_prefix = ""
        extra = "ignore"


settings = Settings()
