export default function getStudentsByLocation(objs, city) {
  if (!Array.isArray(objs)) {
    return [];
  }
  const ids = objs.filter((obj) => obj.location === city);
  return ids;
}
