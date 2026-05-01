
# Normalización de Bases de Dato
---

## 1. ¿Qué es la normalización?

La normalización de bases de datos es un proceso de diseño que organiza los datos en estructuras de tablas específicas. Su propósito central es:

- Mejorar la integridad de los datos
- Prevenir anomalías (inserción, eliminación, actualización)
- Minimizar la redundancia involuntaria
- Reforzar el rendimiento de las consultas

Fue propuesta por **Edgar F. Codd** (matemático de IBM) en los años 70, como respuesta a los problemas que generaban las dependencias "indeseables" entre columnas en bases de datos grandes.

---

## 2. Tipos de anomalías 

| Anomalía | ¿Qué ocurre? |
|----------|--------------|
| **Inserción** | No se puede agregar un registro porque faltan datos requeridos por la estructura de la tabla |
| **Eliminación** | Al borrar un registro, se pierden datos importantes que estaban "atrapados" en él |
| **Actualización** | Se actualiza un valor en una fila pero no en otras donde también aparece, generando inconsistencias |

---

## 3. Las Formas Normales

### Primera Forma Normal (1FN)
- La tabla debe tener una **clave primaria**
- No debe haber **columnas repetidas** del mismo tipo (grupos repetitivos)
- No debe haber **celdas con múltiples valores**

**Error típico:** tener columnas `contacto1`, `contacto2`, `contacto3` en una misma fila.

---

### Segunda Forma Normal (2FN)
- Cumple la 1FN
- Ningún atributo no-clave depende **parcialmente** de una clave compuesta, debe depender de **toda** la clave

---

### Tercera Forma Normal (3FN)
- Cumple la 2FN
- Ningún atributo no-clave depende de **otro atributo no-clave** (se eliminan las dependencias transitivas)

**Error típico:** en una tabla de empleados, `nombre_depto` depende de `num_depto`, que no es la clave primaria.

---

### Forma Normal de Boyce-Codd (BCNF)
Versión más estricta de la 3FN. Requiere el uso de **superclaves** como determinantes en todas las dependencias funcionales.

---

### Cuarta Forma Normal (4FN)
Elimina las **dependencias multivaluadas**: cuando dos atributos son independientes entre sí pero ambos dependen solo de la clave primaria, deben separarse en tablas distintas.

**Ejemplo:** un empleado puede tener varias habilidades Y varios idiomas → se necesitan dos tablas separadas.

---

### Quinta Forma Normal (5FN)
La más avanzada. Se centra en la **dependencia de unión**: una tabla solo debe dividirse si al recombinar las tablas resultantes se puede reconstruir exactamente la tabla original.

---

## 4. Claves importantes en la normalización

| Tipo de clave | Definición |
|---------------|------------|
| **Clave primaria** | Identifica de forma única cada fila, no acepta nulos ni duplicados |
| **Clave compuesta** | Clave formada por dos o más columnas |
| **Clave candidata** | Columna(s) con características de clave primaria, pero sin ese estatus asignado |
| **Clave foránea** | Referencia a la clave primaria de otra tabla; establece relaciones entre tablas |
| **Superclave** | Conjunto de columnas que identifican filas de forma única, pero con columnas de más |

---

## 5. Desafíos de la normalización

- Antes de normalizar, un usuario puede consultar una sola tabla, después puede necesitar hacer `JOIN` entre varias, lo que puede ser más lento
- Aunque simplifica las tablas individuales, aumenta la complejidad general del sistema
- Requiere experiencia en diseño de bases de datos para implementarse correctamente

---

## 6. Comparación con los ejercicios de clase

### Ejercicio: Tabla de Profesores con múltiples contactos

**(sin normalizar):**

| id_prof | nombre | contacto1 | contacto2 | contacto3 |
|---------|--------|-----------|-----------|-----------|
| 1 | Ana López | ana@uni.mx | 5551234 | @ana_lopez |
| 2 | Carlos Ruiz | carlos@uni.mx | 5559876 | NULL |

**Problema:** Esta tabla viola la **1FN** porque tiene grupos repetitivos (`contacto1`, `contacto2`, `contacto3`).

Además, genera una **anomalía de inserción**: si un profesor tiene 4 contactos, no se puede registrar sin modificar la estructura de la tabla.

**Solución (aplicando 1FN):**

*Tabla PROFESOR*

| id_prof | nombre |
|---------|--------|
| 1 | Ana López |
| 2 | Carlos Ruiz |

*Tabla CONTACTO*

| id_contacto | id_prof (FK) | tipo | valor |
|-------------|--------------|------|-------|
| 1 | 1 | email | ana@uni.mx |
| 2 | 1 | teléfono | 5551234 |
| 3 | 1 | twitter | @ana_lopez |
| 4 | 2 | email | carlos@uni.mx |
| 5 | 2 | teléfono | 5559876 |

Ahora `id_prof` es **clave foránea** en CONTACTO, tal como el artículo explica el rol de las claves externas al dividir tablas.

---

### Ejercicio: Profesores y Departamentos (relación muchos a muchos)

**(sin normalizar):**

| id_prof | nombre_prof | depto | director_depto |
|---------|-------------|-------|----------------|
| 1 | Ana López | Matemáticas | Dr. Pérez |
| 2 | Carlos Ruiz | Matemáticas | Dr. Pérez |
| 3 | Ana López | Física | Dra. Gómez |

**Problemas identificados:**

1. **Viola la 3FN:** `director_depto` depende de `depto`, no de `id_prof` (dependencia transitiva).
2. **Viola la 1FN / genera redundancia:** Ana López aparece en dos filas porque pertenece a dos departamentos.
3. **Anomalía de eliminación:** Si se elimina a Carlos Ruiz, podríamos perder el dato de que el director de Matemáticas es el Dr. Pérez.

**Solución:**

*Tabla PROFESOR*

| id_prof | nombre_prof |
|---------|-------------|
| 1 | Ana López |
| 2 | Carlos Ruiz |

*Tabla DEPARTAMENTO*

| id_depto | nombre_depto | director |
|----------|--------------|----------|
| 10 | Matemáticas | Dr. Pérez |
| 20 | Física | Dra. Gómez |

*Tabla PROFESOR_DEPARTAMENTO (tabla de relación)*

| id_prof (FK) | id_depto (FK) |
|--------------|---------------|
| 1 | 10 |
| 2 | 10 |
| 1 | 20 |

Esto refleja exactamente lo que el artículo muestra con las tablas `EMPLOYEE`, `DEPARTMENT` y `EMPLOYEE_DEPARTMENT` para cumplir la **3FN**.

---

