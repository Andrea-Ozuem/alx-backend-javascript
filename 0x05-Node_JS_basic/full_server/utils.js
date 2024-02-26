const fs = require('fs').promises;

async function readDatabase(path) {
  try {
    const data = await fs.readFile(path, { encoding: 'utf8' });
    let res = [];
    data.split('\n').forEach((data) => {
      res.push(data.split(','));
    });
    // remove csv header and empty lines
    res.shift();
    res = res.filter((row) => row.length > 1);

    // seperate rows based on field [3]
    const fields = res.reduce((group, row) => {
      const field = row[3];
      const grp = group;
      grp[field] = grp[field] || [];
      grp[field].push(row);
      return grp;
    }, {});
    return fields;
  } catch (err) {
    throw new Error();
  }
}
module.exports = readDatabase;
