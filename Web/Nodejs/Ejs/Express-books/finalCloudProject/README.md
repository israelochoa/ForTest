# Express Books
Express Books es una aplicacion web para guardar una lista de tus libros favorita. Todos los datos son almacenados en un archivo json

# ScreenShoot

![Express Books](docs/screenshot.png)

# Instalacion

```shell
git clone https://github.com/FaztTech/books-express
npm install
npm run build
npm start
```

# Variables de entorno

- `PORT`, Este es el puerto del server por defaul `5000`.
- `APPID` - (optional), ID unico  para la aplicacion 

Tambien puede crear un archivo .env file con las variables de entorno mencionadas.
# Docker

```shell
docker build -t express-books .
```

```shell
docker run -p 80:5000 express-books .
```

then visit: `http://localhost`

# Considerations

- Make sure nodemon ignores the file `src/books.json`.

## Reference

- https://babeljs.io/docs/en/babel-plugin-transform-runtime
Para futuro, add [ara mi]
### Todo

- [ ] Add user authentication
- [ ] Allow to download the json data
- [ ] Publish a docker container image on dockerhub
- [x] Change to dark theme
