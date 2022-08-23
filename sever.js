const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//settings
app.set('port', process.env.PORT || 3000);
app.set('appName', 'Servidor web');
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public/'));

app.listen('3000', function () {
  console.log('Servidor web escuchando en el puerto 8000');
});

//metodo post 
app.post('/variables', (request, response) => {
console.log(request.body);
  response.send(request.body.Jugador);
});

app.get('/jugador', (request, response) =>  {
console.log(request);
  response.render("jugador",{Jugador:request.query.Jugador});

});