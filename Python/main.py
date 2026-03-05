from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"} #json 


@app.get("/info")
def get_info():
    return {
        "nombre": "Natalia",
        "edad": 22,
        "color_favorito": "#E89DFA"
    }

@app.get("/v1/usuario/{id}")
def diccionario_id(id: int):
    usuarios = {
        1: {"nombre": "Juan", "edad": 25},
        2: {"nombre": "Maria", "edad": 18},
        3: {"nombre": "Pedro", "edad": 22}
    }

    if id in usuarios:
        return usuarios[id]
    else:
        return {"error": "Usuario no encontrado"}


@app.get("/v1/items/{item_id}")
def read_item(item_id: int, q: str | None = None):
    return {"item_id": item_id, "q": q}