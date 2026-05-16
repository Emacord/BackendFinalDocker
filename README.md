# Backend Ecommerce API - Final Project

## Descripción

Proyecto backend desarrollado con Node.js y Express como entrega final del curso de Backend.

El proyecto incluye:

* API REST
* Swagger Documentation
* Functional Testing con Jest y Supertest
* Dockerización completa
* Imagen pública en DockerHub

---

# Tecnologías utilizadas

* Node.js
* Express
* Jest
* Supertest
* Swagger
* Docker
* Handlebars
* Socket.io

---

# Repositorio GitHub

https://github.com/Emacord/BackendFinalDocker

---

# Instalación del proyecto

## Clonar repositorio

```bash
git clone https://github.com/Emacord/BackendFinalDocker.git
```

## Entrar al proyecto

```bash
cd BackendFinalDocker
```

## Instalar dependencias

```bash
npm install
```

---

# Ejecutar el proyecto

```bash
npm run dev
```

Servidor:

```txt
http://localhost:8080
```

---

# Swagger Documentation

La documentación Swagger se encuentra disponible en:

```txt
http://localhost:8080/api/docs
```

---

# Tests Funcionales

Los tests funcionales fueron desarrollados para todos los endpoints del router:

```txt
adoption.router.js
```

Incluyen:

* Casos de éxito
* Casos de error
* Validaciones

## Ejecutar tests

```bash
npm test
```

---

# Docker

## Construir imagen Docker

```bash
docker build -t backend-final .
```

## Ejecutar contenedor

```bash
docker run -p 8080:8080 backend-final
```

---

# DockerHub

Imagen pública disponible en:

https://hub.docker.com/r/gunit2/backend-final

---

# Arquitectura del proyecto

El proyecto se encuentra organizado utilizando arquitectura por capas:

```txt
Router
Controller
Service
Repository
DAO
```

También incluye:

* Middleware
* DTO
* Swagger
* Testing
* Docker

---

# Estructura del proyecto

```txt
src/
├── config/
├── controllers/
├── dao/
├── dto/
├── middlewares/
├── models/
├── repositories/
├── routes/
├── services/
├── utils/
├── views/
└── app.js

test/
└── adoption.test.js

Dockerfile
package.json
README.md
```

---

# Autor

Desarrollado por:

**CORDOBA EMANUEL**

Entrega final - Curso Backend
