import fs from 'fs/promises';

export async function readDatabase(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    const lines = data.trim().split('\n').slice(1); // Skip header line
    const fields = {};

    for (const line of lines) {
      const [firstName, , , field] = line.split(',');
      if (firstName && field) {
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstName);
      }
    }
    return fields;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}
