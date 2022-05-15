# Mercado Libre Backend

API para consumir la lista de items de Mercado Libre segun los criterios del buscador

## CI / CD - Github Actions

### Github Actions para el CI / CD

![](https://miro.medium.com/max/3404/1*k99_arb0x9B7LI4I5hhCPw.png)

En el aplicativo se creo una pipeline de github actions que corre cuando se realiza un merge con la rama main.

El pipeline genera la imagen de docker y la sube al container registry de Dockerhub. Una vez realizado esto se reemplazan los datos de ambiente en los manifiestos .yaml de Kubernetes para posteriormente ser aplicados y desplegados en el cluster de Digital Ocean.

[Mercado Libre API](http://206.189.255.152/swagger/api-docs)

## Infraestructura sobre Kubernetes

[![Kubernetes](https://cdn.filestackcontent.com/RlUuJIVESsOwxSF6qcD9?auto=compress,format)](http://206.189.255.152/swagger/api-docs)

### Cluster de Kubernetes en Digital Ocean

Se crea un cluster de kubernetes para el despliegue de los diferentes componentes de la API y se accede a la API a travez de un balancedor de carga que la misma nube provee

## Estructura de Directorio

```bash
.
├── Dockerfile
├── Makefile
├── README.md
├── deployment
│   ├── Dockerfile
│   └── deployment.yaml
├── docker-compose.yml
├── ecosystem.config.js
├── jest.config.js
├── nginx.conf
├── nodemon.json
├── package-lock.json
├── package.json
├── src
│   ├── app.ts
│   ├── config
│   │   ├── axios
│   │   │   └── index.ts
│   │   └── index.ts
│   ├── constants
│   │   └── index.ts
│   ├── controllers
│   │   └── items.controller.ts
│   ├── exceptions
│   │   └── HttpException.ts
│   ├── http
│   │   └── items.http
│   ├── interfaces
│   │   ├── author.interface.ts
│   │   ├── data.interface.ts
│   │   ├── item.interface.ts
│   │   ├── items.interface.ts
│   │   ├── price.interface.ts
│   │   └── routes.interface.ts
│   ├── logs
│   │   ├── debug
│   │   │   └── 2022-05-15.log
│   │   └── error
│   │       └── 2022-05-15.log
│   ├── middlewares
│   │   ├── error.middleware.ts
│   │   └── validation.middleware.ts
│   ├── routes
│   │   └── items.route.ts
│   ├── server.ts
│   ├── services
│   │   └── items.service.ts
│   ├── tests
│   │   └── items.test.ts
│   └── utils
│       ├── logger.ts
│       ├── util.ts
│       └── validateEnv.ts
├── swagger.yaml
└── tsconfig.json
```

## Instrucciones para correr el proyecto localmente

Primeramente debemos de descargar el repositorio con git

```bash
git clone https://github.com/manwkult/mercado-libre-backend.git
```

_NodeJS debe de estar instalado en la maquina y de ser posible Docker tambien_

[Install Docker](https://www.docker.com/products/docker-desktop/)

[Install Node](https://nodejs.org/es/download/)

Una vez descargado el repositorio debes de descargar las dependencias del proyecto

```bash
npm install
```

Y luego lo ejecutas

```bash
npm run dev
```
o
```bash
docker-compose up
```

Estando el proyecto ejecutado ingresa al link

Si esta levandado con Node [http://localhost:3000/swagger/api-docs](http://localhost:3000/swagger/api-docs)

Con `docker-compose` [http://localhost/swagger/api-docs](http://localhost/swagger/api-docs)


## Arquitectura

 - typescript
 - express
 - nodemon
 - jest
 - .env
 - axios
 - swagger

## Link del proyecto publicado

[Mercado Libre API](http://206.189.255.152/swagger/api-docs)
