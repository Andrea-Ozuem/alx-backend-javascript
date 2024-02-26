const express = require('express');
const fs = require('fs').promises;

const app = express();
const port = 1245;

async function countStudents(path) {
  let outTxt = '';
  try {
    const data = await fs.readFile(path, { encoding: 'utf8' });
    let res = [];
    data.split('\n').forEach((data) => {
      res.push(data.split(','));
    });

    // remove csv header
    res.shift();

    // remove empty lines/rows
    res = res.filter((row) => row.length > 1);
    outTxt = `Number of students: ${res.length}\n`;

    // seperate rows based on field [3]
    const fields = res.reduce((group, row) => {
      const field = row[3];
      const grp = group;
      grp[field] = grp[field] || [];
      grp[field].push(row);
      return grp;
    }, {});

    // print stat for each field
    Object.entries(fields).forEach((entry) => {
      const [key, value] = entry;
      const fName = value.map((val) => ` ${val[0]}`);
      outTxt += `Number of students in ${key}: ${value.length}. List:${fName}\n`;
    });
  } catch (err) {
    return 'Cannot load the database';
  }
  return outTxt;
}

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.write('This is the list of our students\n');
  countStudents(process.argv[2]).then((out) => res.end(out.trim()));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;
