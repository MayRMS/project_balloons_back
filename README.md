# Backend-BALLOONS

### ¿Qué es Balloons?


‘Balloons’, o globos, representa algo que nos aporta felicidad pero al mismo tiempo tiene que ser cuidado dada su fragilidad, y esta app se basa en ese concepto.

 This is the first part of the final project for the GeeksHubs Academy FullStack Developer bootcamp that consists of creating the backend part for a totaly functional application.

**Proyecto**
- Este proyecto consiste en la creación de un Back para el proyecto final del bootcamp Full Stack Developer que imparte GeeksHubs Academy.

Si bien ya hay apps que solventen este tipo de dificultades, no hay ninguna(a priori) que aun el cuidado tanto de niños como de mascotas, uniendo profesionales en pedagogía infantil y 
estudiantes de veterinaria, comportamiento animal, etc, facilitamos el acceso a los usuarios con una interfaz efectiva y simple, y permitimos a jóvenes que necesitan compaginar sus 
estudios que tengan contacto con aquello a lo que se van a dedicar de una forma totalmente real.
A veces la cantidad de posibilidades o lo poco intuitivo de las mismas, generan un rechazo en su uso, por lo que se intentará que esta sea asequible para 
usuarios de todo tipo, incluido gente con poca relación con las tecnologías: por ejemplo, hay gente de más edad que necesita, por problemas de distinta 
índole, que alguien cuide o pasee a sus mascotas, pero no se relacionan del todo bien con las tecnologías. 
De este modo tendrán la posibilidad de hacerlo fácilmente.

Las funcionalidades que se requerirán para esta primera comprobación radican en la consulta de datos por parte del usuario, del que hay dos tipos, el login, register, 
y algunas otras que desarrollaremos de manera más concreta en los siguientes apartados.
El proyecto consiste en poner en práctica los conocimientos adquiridos durante todo el Bootcamp.

**Tecnologias que se han usado**

![js2](https://user-images.githubusercontent.com/114490860/222938291-1e87d5ea-71aa-4545-9ad6-496f25ecae48.png)
![mongodb](https://user-images.githubusercontent.com/114490860/222938180-670123f9-e7b5-444d-a768-3b99d10df020.png)
![mongoose](https://user-images.githubusercontent.com/114490860/222938190-5aa3f244-5fd4-4dbb-b0fd-9ba1d1ee7e64.png)

**Colecciones**
- Usuarios: Creacion y logging de usuarios y modificación 
- Carers: Creacion y logging de usuarios de tipo Carer y modificación 
- Ofertas: CRUD y endpoints.

# ¡Este es el resultado!
### USERS:

## Obtener todos:
URL: 'http://localhost:3300/user'
Method: GET

## Registro:

URL: 'http://localhost:3300/user' 
Method: POST
curl --location 'http://localhost:3300/user' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Jose",
    "email":"jose@gmail.com",
    "password": "jose",
    "workArea": "Badajoz",
    "offers": "afternoons, 2 kids",
    "specifications": "one of them needs help with homework"
}'

## Login:
Requisitos: Endpoint securizado con token de JWT.

URL: http://localhost:3300/user/login
Method: POST

curl --location 'http://localhost:3300/user/login' \
--header 'Content-Type: application/json' \
--data-raw '
{
    "email":"jose@gmail.com",
    "password": "jose"
}'

## Update

URL: http://localhost:3300/user/63f918926ea36c949bb3dc8d
Method: PUT

curl --location --request PUT 'http://localhost:3300/user/63f918926ea36c949bb3dc8d' \
--header 'Content-Type: application/json' \
--data '
{
    "offers": "weekends, 1 kid"
}'

## Get Users Offers:

URL: curl --location 'http://localhost:3300/offer/user/640c7b4566ec0e48a1d34aaf'
Method: GET

### CARERS:

## Obtener todos:
URL: http://localhost:3300/carer
Method: GET


## Registro:

URL: http://localhost:3300/carer
Method: POST

curl --location 'http://localhost:3300/carer' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Nuria",
    "email":"!gatjgfhgfos1@gmail.com",
    "password": "gatos1"
}'

## Login:
Requisitos: Endpoint securizado con token de JWT.

URL: http://localhost:3300/carer/login
Method: POST

curl --location 'http://localhost:3300/carer/login' \
--header 'Content-Type: application/json' \
--data-raw '
{
    "email":"gatosup@gmail.com",
    "password": "gatosup3"
}'

## Update

URL: http://localhost:3300/carer/63f765534d4b33854067452d'
Method: PUT

curl --location --request PUT 'http://localhost:3300/carer/63f765534d4b33854067452d' \
--header 'Content-Type: application/json' \
--data ' {

        "password":"gatosup3"

 }'

### OFFERS:

## Obtener todos:
URL: http://localhost:3300/offer
Method: GET
curl --location 'http://localhost:3300/offer'

## Crear una nueva:
URL: http://localhost:3300/offer
Method: POST

curl --location 'http://localhost:3300/offer' \
--header 'Content-Type: application/json' \
--data '{
    "title": "Se busca cuidador de patatas",
    "specifications":"Dos perros grandes, buenos de paseo y tranquilos",
    "workArea": "Tarancon",
    "availability": "de lunes a viernes de 10 a 14",
    "user": "63f913daf039d01030ce9d1e",
    "type": "Mascotas",
    "feeOffered": "15"
}'

## Update:
URL: http://localhost:3300/offert/6401dccb8539d3b1ace28df2
Method: PUT

curl --location --request PUT 'http://localhost:3300/offert/6401dccb8539d3b1ace28df2' \
--header 'Content-Type: application/json' \
--data '{
    "specifications":"Dos perros grandes, buenos de paseo y tranquilos. Cuatro gatos, alimentar  y dar de beber a las 11h, medicación a uno de ellos cada dos días"
}'



## Instalación
***
Para correrlo en local:
```
$ git clone https://example.com
$ cd ../path/to/the/file
$ npm install
$ npm start
```
