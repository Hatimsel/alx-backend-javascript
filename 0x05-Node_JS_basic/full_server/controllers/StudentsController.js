import { readDatabase } from '../utils.js';

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const databasePath = process.argv[2];
      const fields = await readDatabase(databasePath);
      let responseText = 'This is the list of our students\n';
      for (const [field, students] of Object.entries(fields).sort()) {
        responseText += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
      }
      res.status(200).send(responseText.trim());
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const major = req.params.major;
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    try {
      const databasePath = process.argv[2];
      const fields = await readDatabase(databasePath);
      if (!fields[major]) {
        res.status(200).send('List: ');
        return;
      }
      const students = fields[major].join(', ');
      res.status(200).send(`List: ${students}`);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
