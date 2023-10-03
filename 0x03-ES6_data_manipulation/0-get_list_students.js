export default function getListStudents() {
  const res = [];
  res.push({ id: 1, firstName: 'Guillaume', location: 'San Francisco' });
  res.push({ id: 2, firstName: 'James', location: 'Columbia' });
  res.push({ id: 5, firstName: 'Serena', location: 'San Francisco' });
  return res;
}
