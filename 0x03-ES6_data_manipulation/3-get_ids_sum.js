export default function getStudentIdsSum(objs) {
  if (!Array.isArray(objs)) {
    return [];
  }
  const ids = objs.reduce((acc, curr) => acc + curr.id, 0);
  return ids;
}
