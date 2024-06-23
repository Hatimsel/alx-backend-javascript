const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.split('\n');
    lines.shift();

    let result = `Number of students: ${(lines.length)}\n`;
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
        result += `Number of students in ${field}: `
                    + `${students.length}. List: ${students.join(', ')}\n`;
      }
    }
    // console.log(result);
    return result;
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;

// countStudents('database.csv')
