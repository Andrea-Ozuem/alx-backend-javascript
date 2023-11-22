import readDatabase from '../utils';

export class StudentsController {
  static getAllStudents(req, res) {
    res.status(200);
    readDatabase()
      .then((out) => {
        const final = 'This is the list of our students\n';
        Object.keys(out).sort().forEach((key) => {
          const fName = out.key.map((val) => ` ${val[0]}`);
          final += `Number of students in ${key}: ${fName.length}. List:${fName}\n`;
        });
        res.send(final.trim());
      })
      .catch(() => {
          res.status(500).send('Cannot load the database');
      });
}
