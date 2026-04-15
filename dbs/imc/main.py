# API fon fastapi para calcular el IMC (Índice de Masa Corporal)
import sqlite3
from fastapi import FastAPI, HTTPException
from models import Persona

app = FastAPI()

def crear_base_datos():
    conn = sqlite3.connect('imc.db')
    cursor = conn.cursor()
    
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS imc (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nombre TEXT NOT NULL,
            peso REAL NOT NULL,
            talla REAL NOT NULL,
            imc REAL 
        );
    ''')
    
    conn.commit()
    conn.close()

crear_base_datos()

# ---- ENDPOINTS ---- #

@app.post("/calculate_imc/")
def calculate_imc(person: Persona):
    # Calcular el IMC
    imc = person.peso / (person.talla ** 2)

    # Guardar la información en la base de datos
    conn = sqlite3.connect('imc.db')
    cursor = conn.cursor()
    
    cursor.execute('''
        INSERT INTO imc (nombre, peso, talla, imc )
        VALUES (?, ?, ?, ?);
    ''', (person.nombre, person.talla, person.peso, imc))

    nuevo_id = cursor.lastrowid
    conn.commit()
    conn.close()

    return {"id": nuevo_id, "nombre": person.nombre,
            "peso": person.peso, "talla": person.talla, "imc": imc}


@app.get("/get_persona/{id_persona}")
def get_persona(id_persona: int):
    conn = sqlite3.connect('imc.db')
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM imc WHERE id = ?", (id_persona,))
    row = cursor.fetchone()
    conn.commit()
    conn.close()

    if row is None:
        raise HTTPException(status_code=404, detail="Persona no encontrada")
    return {"id": row[0], "nombre": row[1], "peso": row[2], "talla": row[3], "imc": row[4]}

@app.get("/get_all_personas/")
def get_all_personas():
    # Obtener la información de todas las personas
    conn = sqlite3.connect('imc.db')
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM imc")
    rows = cursor.fetchall()
    conn.commit()
    conn.close()

    return [{"id": r[0], "nombre": r[1], "peso": r[2], "talla": r[3], "imc": r[4]} for r in rows]


@app.put("/update_persona/{id_persona}")
def update_persona(id_persona: int, person: Persona):
    imc = person.peso / (person.talla ** 2)

    conn = sqlite3.connect('imc.db')
    cursor = conn.cursor()

    cursor.execute(
        "UPDATE imc SET nombre = ?, peso = ?, talla = ?, imc = ? WHERE id = ?",
        (person.nombre, person.peso, person.talla, imc, id_persona)
    )

    filas_afectadas = cursor.rowcount
    conn.commit()
    conn.close()

    if filas_afectadas == 0:
        raise HTTPException(status_code=404, detail="Persona no encontrada")
    
    return {"id": id_persona, "nombre": person.nombre,
            "peso": person.peso, "talla": person.talla, "imc": imc}
    
@app.delete("/delete_persona/{id_persona}")
def delete_persona(id_persona: int):
    # Eliminar la información de una persona por su ID
    conn = sqlite3.connect('imc.db')
    cursor = conn.cursor()
    cursor.execute("DELETE FROM imc WHERE id = ?", (id_persona,))
    filas_afectadas = cursor.rowcount # 1  → sí existía y se eliminó o 0 → no existía
    conn.commit()
    conn.close()

    if filas_afectadas == 0:
        raise HTTPException(status_code=404, detail="Persona no encontrada")
    return {"message": "Persona eliminada"}