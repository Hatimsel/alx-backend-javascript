const fs = require('node:fs').promises;

async function readDatabase(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.split('\n');
    lines.shift();

    const fields = {};

    for (const line of lines) {
      const components = line.split(',').map((component) => component.trim());
      if (!(components[3] in fields)) {
        fields[components[3]] = [];
      }
      fields[components[3]].push(components[0]);
    }

    // const result = [];
    // for (const field in fields) {
    //     result.push(fields[field]);
    // }

    return fields;
  } catch (err) {
    throw new Error(err);
  }
}

module.exports = readDatabase;

// async function execute() {
//     const result = await readDatabase('database.csv');
//     console.log(result);
// }

// execute()
