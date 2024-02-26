const fs = require('fs').promises;

async function countStudents(path) {
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
    console.log(`Number of students: ${res.length}`);
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
      console.log(`Number of students in ${key}: ${value.length}. List:${fName}`);
    });
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}
module.exports = countStudents;
