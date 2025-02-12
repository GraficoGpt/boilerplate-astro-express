require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const helloWorldRoutes = require('./modules/hello-world/helloWorldRoutes');
const formularioRoutes = require('./modules/lead-form/leadFormRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors({
  origin: ['http://localhost:4321', 'http://localhost:3000'],
  credentials: true
}));
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para servir el archivo HTML en "/"
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Rutas
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/hello-world', helloWorldRoutes);
app.use('/api/formulario', formularioRoutes);

// Servidor
app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
