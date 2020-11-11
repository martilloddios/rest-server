require('./config/config.js');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');


// parsear application/x-www-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//pasear application/json
app.use(bodyParser.json());


app.get('/usuario', function(req, res) {
    res.json('get Usuario');
});

app.post('/usuario', function(req, res) {

    let body = req.body;

    if (body.nombre === undefined || body.nombre == "") {
        res.status(400).json({

            ok: false,
            error: "No se ha informado un ID de usuario"
        });

    } else {
        res.json({
            persona: body
        });
    };

});

app.put('/usuario:id', function(req, res) {

    let id = req.params.id;
    res.json({
        id
    });
});

app.delete('/usuario', function(req, res) {
    res.json('delete Usuario');
});

app.listen(process.env.PORT, () => {

    console.log('Escuchando en el puerto: ', process.env.PORT);

});