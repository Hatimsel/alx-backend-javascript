#!/usr/bin/node

const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.trim().split('\n');
    lines.shift();

    const fields = {};

    for (const line of lines) {
      const parts = line.split(',');
      if (parts.length >= 4) {
        const field = parts[3].trim();
        if (field && !(field in fields)) {
          fields[field] = [];
        }
        const firstName = parts[0].trim();
        if (field && firstName) {
          fields[field].push(firstName);
        }
      }
    }

    console.log(`Number of students: ${lines.length}`);

    for (const field in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, field)) {
        const listOfStudents = fields[field].join(', ');
        console.log(
          `Number of students in ${field}:`
            + `${fields[field].length}. List: ${listOfStudents}`,
        );
      }
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
