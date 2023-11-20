const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
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
    const fields = res.reduce((grp, row) => {
      const modifiedGrp = { ...grp };
      const field = row[3];
      modifiedGrp[field] = grp[field] || [];
      modifiedGrp[field].push(row);
      return modifiedGrp;
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
