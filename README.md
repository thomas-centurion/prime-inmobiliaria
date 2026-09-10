# Prime Inmobiliaria

Aplicación web full stack para una inmobiliaria ficticia, desarrollada como proyecto personal para portfolio.

El proyecto cuenta con un frontend en React y un backend desarrollado con Node.js y Express, conectado a MongoDB. Incluye gestión de propiedades, autenticación de usuarios, consultas de contacto y un panel de administración con diferentes niveles de acceso.

## ✨ Características

- Landing page inmobiliaria responsive
- Listado y búsqueda de propiedades
- Filtros por tipo de propiedad y operación
- Página individual de cada propiedad
- Propiedades destacadas
- Formulario de contacto
- Sistema de autenticación
- Panel de administración
- Diferentes roles de usuario
- Usuario demo de solo lectura
- Gestión de propiedades desde el panel
- Gestión de consultas recibidas
- Protección de rutas
- Validación de datos
- Persistencia de datos en MongoDB
- Scroll reveal y animaciones en el frontend
- Navegación SPA mediante React Router

## 🛠️ Tecnologías

### Frontend

- React
- React Router
- Vite
- CSS
- JavaScript

### Backend

- Node.js
- Express
- MongoDB
- Mongoose
- JWT
- bcrypt
- CORS

## 📁 Estructura del proyecto

```text
prime-inmobiliaria/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── ...
│   └── ...
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── dao/
│   │   ├── middlewares/
│   │   ├── routes/
│   │   ├── services/
│   │   └── ...
│   └── ...
│
└── README.md
```

## 🔐 Roles y acceso

El sistema cuenta con tres roles:

- `user`: usuario normal.
- `admin`: administrador con permisos completos.
- `demo`: administrador de demostración con acceso de solo lectura.

### 👀 Acceso demo

Para poder explorar el panel de administración:

```text
Usuario: admin
Contraseña: admin
```

Este usuario corresponde al rol `demo`.

**El usuario demo no puede crear, editar, eliminar ni modificar propiedades o consultas.**

Los botones correspondientes a acciones de escritura permanecen visibles para mostrar cómo sería la interfaz completa, pero al intentar utilizarlos se muestra un mensaje indicando que se trata de una demostración.

## 🔒 Seguridad

- Contraseñas almacenadas mediante hash con bcrypt.
- Autenticación mediante JWT.
- Protección de rutas privadas.
- Autorización basada en roles.
- El registro público siempre crea usuarios con rol `user`.
- Un usuario no puede registrarse enviando manualmente `role: "admin"` o `role: "demo"`.
- El usuario demo es creado y configurado desde el backend.
- Las URLs del frontend y backend se manejan mediante variables de entorno.
- CORS configurado mediante variables de entorno.

## ⚙️ Variables de entorno

### Backend

Crear un archivo `.env` dentro de `backend/`:

```env
PORT=3000
MONGO_URI=tu_mongodb_uri
JWT_SECRET=tu_jwt_secret
FRONTEND_URL=http://localhost:5173
```

### Frontend

Crear un archivo `.env` dentro de `frontend/`:

```env
VITE_API_URL=http://localhost:3000/api
```

Los archivos `.env` no deben subirse al repositorio.

## 🚀 Instalación

Clonar el repositorio:

```bash
git clone https://github.com/thomas-centurion/prime-inmobiliaria.git
```

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

En otra terminal:

```bash
cd frontend
npm install
npm run dev
```

Luego acceder a la URL proporcionada por Vite.

## 📡 API

### Usuarios

```text
POST   /api/users
POST   /api/users/login
GET    /api/users/me
```

### Propiedades

```text
GET    /api/properties
GET    /api/properties/:id
POST   /api/properties
PUT    /api/properties/:id
DELETE /api/properties/:id
```

### Consultas

```text
POST   /api/inquiries
GET    /api/inquiries
GET    /api/inquiries/:id
PUT    /api/inquiries/:id
DELETE /api/inquiries/:id
```

Los endpoints privados requieren autenticación y autorización según el rol del usuario.

## 🎨 Frontend

La interfaz incluye:

- Diseño responsive.
- Componentes reutilizables.
- Animaciones de aparición mediante Scroll Reveal.
- Navegación sin recarga mediante React Router.
- Separación entre páginas, componentes y servicios.
- Estados de carga y manejo de errores.

## 🗄️ Base de datos

La aplicación utiliza MongoDB para almacenar:

- Usuarios
- Propiedades
- Consultas

Mongoose se utiliza como ODM para definir los modelos y gestionar la interacción con MongoDB.

## 📌 Objetivo del proyecto

Prime Inmobiliaria fue desarrollado como proyecto personal para aplicar y consolidar conocimientos de desarrollo web full stack, trabajando con React en el frontend y Node.js/Express en el backend.

El objetivo principal fue construir una aplicación completa, desde la interfaz y experiencia de usuario hasta la API, autenticación, autorización y persistencia de datos.

## 👨‍💻 Autor

**Thomas Centurión**

Proyecto personal desarrollado para portfolio.
