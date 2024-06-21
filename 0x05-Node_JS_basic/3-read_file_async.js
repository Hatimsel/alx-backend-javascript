const fs = require('fs').promises;

function countStudents(path) {
  return fs.readFile(path, 'utf8')
    .then((data) => {
      const lines = data.trim().split('\n');
      const fields = {};

      for (const line of lines.slice(1)) { // Skip the header line
        const parts = line.split(',');
        if (parts.length >= 4) {
          const field = parts[3].trim();
          if (field) {
            if (!fields[field]) {
              fields[field] = [];
            }
            const firstName = parts[0].trim();
            if (firstName) {
              fields[field].push(firstName);
            }
          }
        }
      }

      const totalStudents = Object.values(fields).reduce((acc, curr) => acc + curr.length, 0);
      let result = `Number of students: ${totalStudents}\n`;

      for (const field in fields) {
        if (Object.prototype.hasOwnProperty.call(fields, field)) {
          const listOfStudents = fields[field].join(', ');
          result += `Number of students in ${field}: ${fields[field].length}. List: ${listOfStudents}\n`;
        }
      }
      return result.trim();
    })
    .catch((err) => {
      console.error(err);
      throw new Error('Cannot load the database');
    });
}

module.exports = countStudents;
