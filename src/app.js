const express = require('express');
const app = express();
const router = express.Router();
const cors = require('cors')
app.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});

//Rotas
const index = require('./routes/index');
const personRoute = require('./routes/personRoute');
app.use('/', index);
app.use('/persons', personRoute);
module.exports = app;
