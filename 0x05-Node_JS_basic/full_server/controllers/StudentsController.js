const readDatabase = require('../utils');

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const result = await readDatabase('database.csv');
      let response = 'This is the list of our students\n';

      const orderedFields = {};

      const keys = Object.keys(result).sort();

      for (const key of keys) {
        orderedFields[key] = result[key];
      }

      for (const field in orderedFields) {
        if (Object.prototype.hasOwnProperty.call(orderedFields, field)) {
          response += `Number of students in ${field}: `
            + `${orderedFields[field].length}. `
            + `List: ${orderedFields[field]}`;
        }
      }

      res.status(200).send(response);
    } catch (err) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;

    if (major === 'CS' || major === 'SWE') {
      try {
        const result = await readDatabase('database.csv');

        const response = `List: ${result[major]}`;
        res.status(200).send(response);
      } catch (err) {
        res.status(500).send('Cannot load the database');
      }
    } else {
      res.status(500).send('Major paramater must be CS or SWE');
    }
  }
}

module.exports = StudentsController;
