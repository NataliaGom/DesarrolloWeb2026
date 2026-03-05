from fastapi import FastAPI

app = FastAPI()

diccionarioUsuarios ={
    1: {"nombre": "Juan", "edad": 25},
    2: {"nombre": "Maria", "edad": 18},
    3: {"nombre": "Pedro", "edad": 22}
}

@app.get("/v1/usuarios")
def read_users():
    return diccionarioUsuarios

@app.get("/v1/usuario/{id}")
def read_user(id: int):
    if id in diccionarioUsuarios:
        return diccionarioUsuarios[id]
    else:
        return {"error": "Usuario no encontrado"}
    
@app.post("/v1/usuarios")
def create_user(usuario_nombre: str, usuario_edad):
    nuevo_id = max(diccionarioUsuarios.keys()) + 1
    
    diccionarioUsuarios[nuevo_id] = {
        "nombre": usuario_nombre,
        "edad": usuario_edad
    }

    return diccionarioUsuarios[nuevo_id] 