const express = require('express');
const users = require('./data/Users');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Server is running');
});

app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
});

// Ruta raíz que responde con un mensaje JSON
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'API de usuarios funcionando correctamente ',
        timestamp: new Date().toISOString(),
        status: 'Success'
    });
});

// obtener todos los usuarios
app.get('/users', (req, res) => {
    res.json({
        message: 'Lista de usuarios',
        timestamp: new Date().toISOString(),
        status: 'Success',
        users: users
    });
});
