const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath)) //ruta de archivos públicos


//app.use('/static', express.static(__dirname + '/public'))

app.listen(3030, () => {
    console.log('Servidor corriendo en el puerto 3030');
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'))
})
