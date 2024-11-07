const express = require('express');
const http = require('http');
const cors = require('cors'); // Importer cors
const socketIo = require('socket.io');

const app = express();

// Configurer CORS pour permettre les requêtes de localhost:4200
const corsOptions = {
  origin: 'http://localhost:4200', // URL de ton frontend
  methods: ['GET', 'POST'], // Méthodes autorisées
  credentials: true, // Si tu utilises des cookies ou des sessions
};

app.use(cors(corsOptions)); // Utiliser cors avec les options

const server = http.createServer(app);
const io = socketIo(server);

// Serveur Socket.IO pour le chat
io.on('connection', (socket) => {
  console.log('A user connected');
  
  socket.on('message', (msg) => {
    // Diffuser les messages à tous les utilisateurs
    io.emit('message', msg);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
