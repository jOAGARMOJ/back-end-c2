#  API de Usuarios

Este backend está hecho con **Node.js** y **Express**.  
Proporciona una API REST que permite listar y crear usuarios para la aplicación **Gestor de Usuarios**.



##  Funcionalidades

- Endpoint para listar todos los usuarios.  
- Endpoint para obtener un usuario por ID.  
- Endpoint para crear un nuevo usuario.  
- Los datos se almacenan en un arreglo local (`/data/Users.js`).  



##  Estructura del proyecto

backend/
├── data/
│   └── Users.js      # Archivo con los datos iniciales
├── index.js          # Servidor Express
└── package.json


##  Instalación y ejecución

### 1️⃣ Clonar el repositorio

bash
git clone https://github.com/tuusuario/gestor-usuarios-backend.git
cd gestor-usuarios-backend


### 2️⃣ Instalar dependencias

bash
npm install


### 3️⃣ Ejecutar el servidor

bash
node index.js


> El servidor se iniciará en:  
>  **http://localhost:3000**



##  Endpoints disponibles

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/` | Verifica que la API está activa |
| GET | `/users` | Retorna todos los usuarios |
| GET | `/users/:id` | Retorna un usuario por su ID |
| POST | `/users` | Crea un nuevo usuario |



##  Ejemplo de `POST /users`

**URL:**  

http://localhost:3000/users


**Body (JSON):**
json
{
  "name": "Jorge García",
  "phone": "3101234567",
  "email": "jorge@example.com",
  "address": "Calle 45 #12-34, Bogotá",
  "age": 28,
  "photoUrl": "https://randomuser.me/api/portraits/men/75.jpg"
}


**Respuesta:**
json
{
  "message": "Usuario creado",
  "status": "Success",
  "user": {
    "id": "11",
    "name": "Jorge García",
    "phone": "3101234567",
    "email": "jorge@example.com",
    "address": "Calle 45 #12-34, Bogotá",
    "age": 28,
    "photoUrl": "https://randomuser.me/api/portraits/men/75.jpg"
  }
}




##  Tecnologías utilizadas

- Node.js  
- Express  
- CORS  
- JavaScript (ES6)



##  Autor

**Jorge Andres García Mojica 1088026128** 
**Paola Andrea Rios Sanchez 1088322161**
Backend desarrollado con fines académicos y de práctica personal. 

**NOTA: las imagenes utilizadas en esta app fueron obtenidas de internet con fines de estudios, los usuarios fueron obteneidos de Mockaroo Api web que genera datos** 
