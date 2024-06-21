const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const databasePath = process.argv[2];
  countStudents(databasePath)
    .then((result) => {
      res.send(`This is the list of our students\n${result}`);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = app;
