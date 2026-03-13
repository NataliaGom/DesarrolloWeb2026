from pydantic import BaseModel

# Clase DTO (Data Transfer Object) para representar un
# objeto de Curso para cuando se van a mandar datos a 
# un endpoint.
class CursoDTO(BaseModel):
    nombre: str

# DTO para crear alumnos
class AlumnoDTO(BaseModel):
    nombre: str
    cursos_inscritos: list[str]


# DTO para actualizar cursos del alumno (PATCH)
class AlumnoPatchDTO(BaseModel):
    cursos_inscritos: list[str]