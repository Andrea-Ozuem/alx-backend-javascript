export default function updateStudentGradeByCity(objs, city, newGrades) {
  if (!Array.isArray(objs)) {
    return [];
  }
  // first filter to get obj in a city
  const filtered = objs.filter((obj) => obj.location === city);

  // map to a new array
  const res = filtered.map((obj) => {
    const grade = newGrades.find((student) => student.studentId === obj.id);

    // eslint-disable-next-line no-param-reassign
    obj.grade = (grade) ? grade.grade : 'N/A';
    return obj;
  });
  return res;
}
