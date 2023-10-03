export default function getListStudentIds(objs) {
  if (!Array.isArray(objs)) {
    return [];
  }
  const ids = objs.map((obj) => obj.id);
  return ids;
}
