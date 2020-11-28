require('./config/config.js');
const express = require('express');

// acceso a base de datos MongoDB
const mongoose = require('mongoose');

// PATH fáciles
const path = require('path');

const app = express();
const bodyParser = require('body-parser');


// parsear application/x-www-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//pasear application/json
app.use(bodyParser.json());

// publicación de la carpeta public
app.use(express.static(path.resolve(__dirname, '../public')));

//configuración global de rutas
app.use(require('./routes/index'));

//incluir login.js
app.use(require('./routes/login'));

mongoose.connect(process.env.URLDB, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    },
    (err, res) => {
        if (err) throw err;
        console.log('Base de datos Mongo ONLINE');
    });

app.listen(process.env.PORT, () => {
    console.log('Escuchando en el puerto: ', process.env.PORT);
});