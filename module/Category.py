from pydantic import BaseModel
from dataclasses import dataclass

@dataclass
class Category(BaseModel):
    id: int
    name: str
    atributes: list[list[str]]
