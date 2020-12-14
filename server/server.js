//midelwels:es cuando se ejecuta todo
require('./config/config.js');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json());
 
app.get('/usuario', function (req, res) {
  res.json('get Usuario ')
})

app.post('/usuario', function (req, res) {
    let body = req.body;
//si existe mandamos el ELSE , si no le mandamos un status
    if(body.nombre === undefined){
        res.status(400).json({
            ok:false,//no algo salio mal
            mensage:'El nombre es necesario'//el mensaje para que sepa lo que necesitamon 
        })
    }else{
        res.json({
            persona: body
        })
    }

   
})

app.put('/usuario/:id', function (req, res) {
    let id = req.params.id;

    res.json({
        id
    })
})

app.delete('/usuario', function (req, res) {
    res.json('Delete Usuario ')
})
 
app.listen(process.env.PORT,()=>{
    console.log('Escuchando el puerto:',3000);
})