from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from utils import generar_guid
from models import FiestaDTO, InvitadosDTO

app = FastAPI()

origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

fiestas_mem = {}
invitados_mem = {}

# Crear nueva fiesta
@app.post("/v1/fiesta")
def crear_fiesta(fiesta: FiestaDTO):
    id_generado = generar_guid()
    fiestas_mem[id_generado] = {"id": id_generado, "nombre": fiesta.nombre, "fecha": fiesta.fecha, "lugar": fiesta.lugar, "activo": fiesta.activa}
    return fiestas_mem[id_generado]


# Obtener fiesta por id
@app.get("/v1/fiesta/{fiesta_id}")
def obtener_fiesta_id(fiesta_id: str):
    if fiesta_id in fiestas_mem:
        return fiestas_mem[fiesta_id]
    else:
        return {"error": "Fiesta no encontrada"}
    
    
# Obtener las fiestas dependiendo el tipo: canceladas o activas
@app.get("/v1/fiestas")
def obtener_fiestas(tipo: bool = None):

    if tipo is None:
        return list(fiestas_mem.values())

    resultado = []

    for fiesta in fiestas_mem.values():
        if fiesta["activo"] == tipo:
            resultado.append(fiesta)

    return resultado

# Cancelar una fiesta por id
@app.post("/v1/fiesta/{fiesta_id}/cancelar")
def cancelar_fiesta(fiesta_id: str):

    if fiesta_id not in fiestas_mem:
        return {"error": "Fiesta no encontrada"}
    
    fiestaCancelar = fiestas_mem[fiesta_id]
    fiestaCancelar["activo"] = False

    return fiestas_mem[fiesta_id]


#Crear un invitado 
@app.post("/v1/invitado")
def crear_invitado(invitado: InvitadosDTO):
    if invitado.id_fiesta not in fiestas_mem:
        return {"error": "La fiesta no existe"}

    if fiestas_mem[invitado.id_fiesta]["activo"] is False:
        return {"error": "No se pueden agregar invitados a una fiesta cancelada"}

    id_generado = generar_guid()
    invitados_mem[id_generado] = {
        "id": id_generado,
        "nombre": invitado.nombre,
        "id_fiesta": invitado.id_fiesta
    }

    return invitados_mem[id_generado]


#Obtener los invitados que fueron a una fiesta 
@app.get("/v1/fiesta/{fiesta_id}/invitados")
def obtener_invitados_por_fiesta(fiesta_id: str):
    resultado = []

    for invitado in invitados_mem.values():
        if invitado["id_fiesta"] == fiesta_id:
            resultado.append(invitado)

    return resultado



