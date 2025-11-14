from pydantic import BaseModel
from dataclasses import dataclass

@dataclass
class Product(BaseModel):
    id: int
    name: str
    category: int
    desc: str
    image_path: str
    size: str
