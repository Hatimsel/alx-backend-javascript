const fs = require('node:fs');

module.exports = function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.toString().split('\n');
    lines.shift();

    const fields = {};
    for (const line of lines) {
      const field = line.split(',')[3].trim();
      if (!(field in fields)) {
        fields[field] = [];
      }
    }

    for (const line of lines) {
      for (const field in fields) {
        const components = line.split(',');
        if (components[3] === field) {
          fields[field].push(components[0]);
        }
      }
    }

    console.log(`Number of students: ${lines.length}`);
    for (const field in fields) {
      console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field]}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};
