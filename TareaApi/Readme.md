# Local Storage vs Session Storage

Los navegadores web modernos ofrecen distintos mecanismos para que las aplicaciones puedan guardar información directamente en el navegador del usuario. Entre los más utilizados se encuentran Local Storage y Session Storage, los cuales permiten almacenar datos del lado del cliente sin necesidad de enviarlos constantemente al servidor.

Aunque ambos cumplen una función similar que es guardar información localmente, su comportamiento y duración son diferentes, lo que hace que cada uno sea útil en distintos escenarios dentro del desarrollo web.

## Local Storage

**Local Storage** permite guardar información de forma persistente en el navegador.  
Los datos almacenados permanecen disponibles **incluso después de cerrar el navegador o reiniciar el dispositivo**, y solo se eliminan cuando el usuario o la aplicación los borra explícitamente.

## Session Storage

**Session Storage** almacena datos únicamente durante la sesión activa del navegador.  
Esto significa que la información **solo existe mientras la pestaña o ventana permanezca abierta**. Una vez que se cierra, todos los datos almacenados se eliminan automáticamente.

---

# Diferencias principales

| Característica      | Local Storage                                                                                                                   | Session Storage                                                                                                            |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| **Persistencia**    | Los datos se mantienen almacenados de forma indefinida hasta que el usuario o la aplicación los elimina.                        | Los datos solo existen durante la sesión activa del navegador.                                                             |
| **Alcance (Scope)** | Los datos pueden ser utilizados por cualquier pestaña o ventana que pertenezca al mismo origen del sitio web.                   | Los datos solo están disponibles dentro de la pestaña o ventana donde se crearon.                                          |
| **Casos de uso**    | Ideal para guardar preferencias del usuario, configuraciones de la aplicación o información que debe permanecer entre sesiones. | Adecuado para datos temporales como información de formularios, carritos de compra o estados momentáneos de la aplicación. |
| **Seguridad**       | Se debe evitar almacenar información sensible, ya que los datos permanecen disponibles en el navegador.                         | Puede ser una opción más segura para datos temporales, ya que se eliminan al finalizar la sesión.                          |

---

# ¿Cuál debería utilizarse?

La elección entre Local Storage y Session Storage depende de las necesidades específicas de la aplicación. Algunos aspectos que deben considerarse incluyen:

- **Duración de los datos**: si la información debe mantenerse entre sesiones o solo durante una interacción temporal.
- **Alcance del acceso**: si los datos deben estar disponibles en múltiples pestañas o solo en una.
- **Seguridad**: si existe riesgo al almacenar información sensible en el navegador.

Tomar en cuenta estos factores permite diseñar aplicaciones web más eficientes y con un manejo adecuado de los datos almacenados en el cliente.

---

# Ejemplos de uso de Session Storage

## Parámetros

| Parámetro | Descripción                                |
| --------- | ------------------------------------------ |
| clave     | Obligatorio. El nombre de la clave.        |
| valor     | Obligatorio. El valor asociado a la clave. |

---

## Valor de retorno

| Tipo   | Descripción                 |
| ------ | --------------------------- |
| Objeto | Un objeto `sessionStorage`. |

### Guardar datos en Session Storage

```javascript
sessionStorage.setItem("clave", "valor");
```

### Leer datos desde Session Storage

```javascript
let apellido = sessionStorage.getItem("clave");
```

### Eliminar un dato de Session Storage

```javascript
sessionStorage.removeItem("clave");
```

### Eliminar todos los datos (limpiar Session Storage)

```javascript
sessionStorage.clear();
```

---

# Conclusión

Tanto Local Storage como Session Storage son herramientas útiles para gestionar información en el navegador dentro de aplicaciones web. La diferencia principal radica en la duración y el alcance de los datos almacenados.

Comprender estas características permite a los desarrolladores seleccionar el mecanismo adecuado según las necesidades del sistema, optimizando así la experiencia del usuario y la seguridad del manejo de datos.

---

# Referencias

Make Computer Science Great Again. (2022). _Local storage vs session storage differences_. Medium.  
https://medium.com/@MakeComputerScienceGreatAgain/local-storage-vs-session-storage-differences-5104765f5b24

W3Schools. (2024). _Window sessionStorage Property_.  
https://www.w3schools.com/jsref/prop_win_sessionstorage.asp
