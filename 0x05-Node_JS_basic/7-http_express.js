const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const result = await countStudents(process.argv[2]);
    res.set('Content-Type', 'text/plain');
    res.send(`This is the list of our students\n${result}`);
  } catch (err) {
    res.status(500).send('Cannot load the database');
  }
});

app.listen(1245, () => {
  console.log('Starting the server on port 1245');
});

module.exports = app;
