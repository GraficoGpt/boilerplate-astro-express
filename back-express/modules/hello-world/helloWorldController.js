const helloWorld = (req, res) => {
    res.json({ message: 'Hello World! The service is running properly.' });
  };

  module.exports = { helloWorld };
