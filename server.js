const express = require('express');
const app = express();

const port = 3000;

app.use(express.static(__dirname));

app.listen(port, function (){
    console.log('servidor corriendo en el puerto ' + port);
});