const http = require('http');
const fs = require('fs').promises;

const hostname = '127.0.0.1';
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

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const path = process.argv[2];
    let outTxt = 'This is the list of our students\n';
    if (!path) {
      res.end(outTxt.trim());
    } else {
      countStudents(path)
        .then((out) => {
          outTxt += out;
        })
        .finally(() => res.end(outTxt.trim()));
    }
  }
});
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
