const http = require('node:http');
const countStudents = require('./3-read_file_async');
const { count } = require('node:console');

const app = http.createServer(async (req, res) => {
    if (req.url === '/') {
        res.write('Hello Holberton School!');
        res.end();
    } else if (req.url === '/students') {
        res.write('This is the list of our students\n');
        try {
            const result = await countStudents(process.argv[2]);
            res.write(result);
        } catch(err) {
            console.log(err);
        }
        res.end();
    } else {
        res.write('Page not found!');
        res.end()
    }
});

app.listen(1245, () => {
  console.log('Server started on localhost:1245!');
});

module.exports = app;
