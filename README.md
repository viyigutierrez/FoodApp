# Food APP

En esta aplicación puedes ver distintas recetas de comida junto con información relevante de las mismas, utilizando la api externa [spoonacular](https://spoonacular.com/food-api) y a partir de ella poder:

  - Buscar recetas
  - Filtrarlos / Ordenarlos
  - Crear nuevas recetas propias
  
  
  
  ![Captura de pantalla 2021-07-01 a la(s) 2 52 37 a  m](https://user-images.githubusercontent.com/75697707/124087296-7cede300-da17-11eb-9a6c-843e8aa9b8df.png)         ![Captura de pantalla 2021-07-01 a la(s) 1 27 57 a  m](https://user-images.githubusercontent.com/75697707/124086464-b07c3d80-da16-11eb-9b76-670a2f94291e.png)




## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

__IMPORTANTE__: Para poder utilizar esta API es necesario crear una cuenta para obtener una API Key que deberá ser incluida en el archivo .env

El archivo `.env` (carpeta api) debe tener la siguiente forma:

```
DB_USER=usuariodepostgres
DB_PASSWORD=passwordDePostgres
DB_HOST=localhost
API_KEY=tu API key
DB_NAME=dogs
PORT=3001
```
Adicionalmente será necesario que crees desde psql una base de datos llamada dogs

### Instalación 🔧

1. Clona el repo
   ```sh
   git clone https://github.com/viyigutierrez/FoodApp
   ```
2. Instala los paquetes
   ```sh
   npm install
   ```
3. Inicia tanto el back (carpeta api), como el front (carpeta client)
   ```sh
   npm start
   ```
  
## Construido con 🛠️

- [ ] React
- [ ] Redux
- [ ] Express
- [ ] Sequelize - Postgres


## Licencia 📄

Este proyecto fue creado con fines educativos, no tiene fines de lucro - sientete libre de usarlo




