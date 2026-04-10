# Tarea de SQLite

## 1. ¿Qué es una transacción? ¿Para qué se usan?

Una transacción de base de datos es una unidad de trabajo realizada dentro de un DBMS, independiente de otras transacciones. Representan cualquier tipo de cambio en una base de datos. Si una transacción tiene éxito, todas las modificaciones de los datos realizadas durante la transacción se confirman y se convierten en una parte permanente de la base de datos. Si una transacción encuentra errores y debe cancelarse o revertirse, se borran todas las modificaciones de los datos.

Una transacción está diseñada para garantizar la integridad de los datos. Las características principales que garantizan que se procesen de forma fiable son:

- **Atomicidad:** unidad única e indivisible, fracasa por completo o tiene éxito por completo.  
- **Consistencia:** garantiza que se lleve la base de datos de un estado válido a otro.  
- **Aislamiento:** garantiza que la ejecución concurrente de transacciones dé como resultado un estado del sistema que se obtendría si las transacciones se ejecutaran en serie.  
- **Durabilidad:** garantiza que permanezcan confirmadas las transacciones incluso en fallos del sistema.  

Se usa para facilitar la gestión de errores permitiendo revertir las transacciones si hay algún problema. Además, mejora el rendimiento permitiendo que se realicen varias transacciones simultáneamente y, por último, garantiza la integridad de los datos.

<img width="921" height="378" alt="image" src="https://github.com/user-attachments/assets/2e6ab66c-68c8-4b38-9e51-a03595cfbf35" />


---

## 2. ¿Cómo puedo evitar que el comando para crear una tabla no falle si la tabla ya está creada?

Para evitar que el comando `CREATE TABLE` falle si la tabla ya existe, se utiliza la cláusula `IF NOT EXISTS`. Su función es crear la tabla solo si no existe; en caso contrario, no realiza ninguna acción y continúa con la siguiente instrucción.

---

## 3. ¿Qué es un trigger o disparador?

Un trigger es un procedimiento almacenado en la base de datos que se ejecuta automáticamente cada vez que ocurre un evento especial en la base de datos. Por lo general, estos eventos son cambios en las tablas mediante operaciones de inserción, eliminación y actualización de datos (`INSERT`, `DELETE` y `UPDATE`).

### Clases de trigger

- **Triggers DDL (Data Definition Language):** Se activan en eventos que modifican la estructura de la base de datos (crear, modificar o eliminar una tabla) o en ciertos eventos del servidor.  
- **Triggers DML (Data Modification Language):** Se activan por operaciones de modificación de datos como inserciones, actualizaciones o eliminaciones.

### Ejemplos de uso:
-	Auditoría y Log de cambios: Rastrear quién, cuándo y qué se modificó en una tabla, guardando un historial.
-	Integridad de datos compleja: Validar datos antes de insertarlos o actualizarlos cuando las restricciones (constraints) simples no son suficientes.

### Sintaxis

```sql
CREATE TRIGGER [Nombre_Trigger] // es el nombre definido por el usuario para el nuevo Trigger
ON [Nombre_tabla] // es la tabla a la que se aplica Trigger.
AFTER INSERT, UPDATE, DELETE
[NOT FOR REPLICATION] // Esta opción indica a SQL Server que no active el disparador cuando la modificación de datos se realiza como parte de un proceso de replicación.
AS
{sql_statements}
```
---

## 4. ¿Qué es SQL Injection? ¿Qué implicaciones tiene?

La inyección de SQL es un tipo de ciberataque encubierto en el cual un hacker inserta código propio en un sitio web con el fin de quebrantar las medidas de seguridad y acceder a datos protegidos. Una vez dentro, puede controlar la base de datos del sitio web y secuestrar la información de los usuarios.

Un ataque exitoso puede resultar en acceso no autorizado a información confidencial como:
- Contraseñas
- Datos de tarjetas de crédito
- Información personal
Además, permite modificar o eliminar datos.

### Ejemplos de vulnerabilidades.
Un atacante puede iniciar sesión como cualquier usuario sin necesidad de contraseña. Puede hacerlo utilizando la secuencia de comentarios SQL --para eliminar la verificación de contraseña de la WHEREcláusula de la consulta. Por ejemplo, al introducir el nombre de usuario administrator'--y una contraseña en blanco, se obtiene la siguiente consulta:
SELECT * FROM users WHERE username = 'administrator'--' AND password = ''
Esta consulta devuelve el usuario cuyo nombre usernamees administratory logra que el atacante inicie sesión como ese usuario.

En los casos en que la aplicación responde con los resultados de una consulta SQL, un atacante puede aprovechar una vulnerabilidad de inyección SQL para recuperar datos de otras tablas de la base de datos. Se puede usar la UNION palabra clave para ejecutar una consulta adicional SELECTy agregar los resultados a la consulta original.

### Noticias de talla mundial 

- **Caso Fortnite:** En 2019, el videojuego Fortnite sufrió una vulnerabilidad crítica que incluía un componente de SQL Injection dentro de su infraestructura web. Investigadores de ciberseguridad descubrieron que un subdominio antiguo de Epic Games era vulnerable, lo que permitía a atacantes combinar SQL injection con otras fallas (como XSS y redirecciones maliciosas) para robar tokens de autenticación. Con esto, un hacker podía tomar control completo de cuentas de usuarios sin necesidad de que estos ingresaran sus credenciales, acceder a datos personales, realizar compras con tarjetas vinculadas e incluso espiar conversaciones dentro del juego.
Liga: https://thehackernews.com/2019/01/fortnite-account-hacked.html
- **Caso Tesla:** Caso Tesla
La empresa Tesla, Inc. también ha enfrentado vulnerabilidades relacionadas con SQL Injection. Un caso relevante reportado en 2018 mostró que un sistema interno podía ser explotado mediante SQL injection, permitiendo a atacantes acceder a recursos del sistema y ejecutar actividades no autorizadas, como minería de criptomonedas usando la infraestructura de la empresa. Además, investigaciones anteriores también habían evidenciado fallas en su sitio web que potencialmente podían exponer datos de clientes si no se corregían a tiempo. 
Liga: https://en.iguru.gr/tesla-motors-blind-sql-injection/
- **Caso WordPress:** Una vulnerabilidad crítica de tipo SQL Injection fue descubierta en el plugin “Ally” de WordPress, utilizado por más de 400,000 sitios web. Este fallo permitía a atacantes no autenticados manipular consultas SQL y potencialmente extraer información sensible mediante técnicas como time-based blind SQL injection. A pesar de que el problema fue corregido en una actualización, más del 60% de los sitios seguían siendo vulnerables semanas después, lo que evidencia el riesgo persistente asociado a plugins desactualizados en plataformas ampliamente utilizadas. 
Liga: https://www.techradar.com/pro/security/another-worrying-wordpress-plugin-security-flaw-could-put-250-000-websites-at-risk

---

## 5. ¿Qué es un ORM y qué diferencias existen con escribir sentencias de SQL comunes?

Un ORM (Object-Relational Mapping) es una herramienta que permite interactuar con una base de datos usando objetos y clases de un lenguaje de programación, en lugar de escribir directamente consultas SQL.
En el desarrollo web, una herramienta de mapeo objeto-relacional (ORM) convierte los datos enviados desde una aplicación orientada a objetos en una base de datos relacional sin necesidad de que la aplicación sepa cómo están estructurados esos datos en la base de datos.

### ¿Cuál es la diferencia entre ORM y SQL?
SQL (lenguaje de consulta estructurado) es el lenguaje estándar que se utiliza para interactuar con bases de datos relacionales. Permite crear y administrar esquemas de bases de datos, insertar y actualizar datos y consultar registros mediante comandos declarativos.
SQL proporciona un control directo y de bajo nivel sobre la base de datos. ORM proporciona una interfaz más abstracta y de nivel superior, lo que a menudo acelera el desarrollo y hace que el código sea más fácil de mantener.

### ¿Cuáles son los beneficios de usar el mapeo objeto-relacional?

- **Desarrollo de aplicaciones más rápido:** Pueden gestionar las operaciones rutinarias de las bases de datos, como la creación, la lectura, la actualización y la eliminación de registros (CRUD), de modo que los desarrolladores no tengan que codificar estas operaciones repetidamente en la aplicación.
- **Mantenimiento de aplicaciones más sencillo:** Al resumir las consultas de la base de datos a través de un ORM, los desarrolladores pueden trabajar en un solo idioma, lo que hace que su código sea más fácil de entender y mantener.
- **Seguridad Mejorada:** Un ataque de inyección de código SQL es un intento malintencionado de acceder a datos privados mediante el envío de consultas SQL a través de los formularios de usuario de la aplicación. Los ORM utilizan consultas parametrizadas, que primero envían a la base de datos una consulta con valores de marcador de posición, no con datos reales. Esto garantiza que la entrada del usuario se trate como datos, no como código SQL ejecutable.

## Referencias
- Amazon Web Services. (s.f.). What is Object-Relational Mapping (ORM)? https://aws.amazon.com/what-is/object-relational-mapping/

- PortSwigger. (s.f.). SQL injection. https://portswigger.net/web-security/sql-injection

- Alura Cursos. (s.f.). ¿Qué es y cómo usar trigger en SQL? https://www.aluracursos.com/blog/que-es-y-como-trigger-en-sql

- Microsoft. (s.f.). Transactions (Transact-SQL). https://learn.microsoft.com/es-es/sql/t-sql/language-elements/transactions-transact-sql

- Dremio. (s.f.). Database transaction. https://www.dremio.com/wiki/database-transaction/


