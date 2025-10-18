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


// obtener un usuario por id
app.get('/users/:id', (req, res) => {
    const { id } = req.params;
    const user = users.find(u => u.id === parseInt(id));

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
    const { id, firsht_name, phone, email, address, age, photoUrl } = req.body;
    const user = { id: (users.length + 1), firsht_name, phone, email, address, age, photoUrl };
    users.push(user);
    res.json({
        message: 'Usuario creado',
        timestamp: new Date().toISOString(),
        status: 'Success',
        user: user
    });
});



