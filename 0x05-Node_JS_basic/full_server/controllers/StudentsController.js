import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(req, res) {
    const dbName = process.argv[2];
    readDatabase(dbName)
      .then((out) => {
        let final = 'This is the list of our students\n';
        Object.keys(out).sort().forEach((key) => {
          const fName = out[key].map((val) => ` ${val[0]}`);
          final += `Number of students in ${key}: ${fName.length}. List:${fName}\n`;
        });
        res.send(final.trim());
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }

  /* eslint-disable consistent-return */
  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    const dbName = process.argv[2];
    readDatabase(dbName).then((students) => {
      const studs = students[major];
      const names = [];
      for (const item of studs) {
        names.push(item[0]);
      }
      const output = `List: ${names.join(', ')}`;
      res.status(200).send(output);
    }).catch(() => {
      res.status(500).send('Cannot load the database');
    });
  }
}

module.exports = StudentsController;
