const fs = require('node:fs');

function countStudents(path) {
  try {
    const content = fs.readFileSync(path, 'utf8');
    const lines = content.split('\n');
    lines.shift();

    console.log(`Number of students: ${(lines.length)}`);
    const fields = {};

    for (const line of lines) {
      const components = line.split(',');
      if (!(components[3] in fields)) {
        fields[components[3]] = [];
      }
      fields[components[3]].push(components[0]);
    }
    for (const field in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, field)) {
        const students = fields[field];
        console.log(`Number of students in ${field}: `
            + `${students.length}. List: ${students.join(', ')}`);
      }
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
