from pydantic import BaseModel
from datetime import date


class FiestaDTO(BaseModel):
    nombre: str
    fecha: date
    lugar: str
    activa: bool = True

class InvitadosDTO(BaseModel):
    nombre: str
    id_fiesta: str

