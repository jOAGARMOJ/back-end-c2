const express = require('express');
const app = express();
const port = 3000;
const users = require('./data/Users');

app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
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


// obtener un usuario por id
app.get('/users/:id', (req, res) => {
    const { id } = req.params;
    const user = users.find(u => u.id === id);

    if (!user) {
        return res.status(404).json({
            message: 'Usuario no encontrado',
            timestamp: new Date().toISOString(),
            status: 'Error'
        });
    }
    res.json({
        message: 'Usuario encontrado',
        timestamp: new Date().toISOString(),
        status: 'Success',
        user: user
    });
});


// crear un nuevo usuario
app.post('/users', (req, res) => {
    const { id, first_name, phone, email, address, age, photoUrl } = req.body;
    const user = { id: (users.length + 1).toString(), first_name, phone, email, address, age, photoUrl };
    users.unshift(user);
    res.json({
        message: 'Usuario creado',
        timestamp: new Date().toISOString(),
        status: 'Success',
        user: user
    });
});



app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
});