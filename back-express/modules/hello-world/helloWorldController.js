const tursoClient = require('../../config/turso');

const helloWorld = async (req, res) => {
  try {
    // Ejecutar una consulta simple para validar la conexión
    const result = await tursoClient.execute('SELECT 1');

    if (result) {
      res.json({ message: 'Hello World! Turso connection is working.' });
    } else {
      res.status(500).json({ message: 'Turso connection failed.' });
    }
  } catch (error) {
    console.error('Error checking Turso connection:', error);
    res.status(500).json({ message: 'Error checking Turso connection.', error: error.message });
  }
};

module.exports = { helloWorld };
