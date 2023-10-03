export default function cleanSet(set, startString) {
  const res = [];
  for (const item of set) {
    if (item.startsWith(startString) && startString) {
      const rem = item.substring(startString.length);
      res.push(rem);
    }
  }
  const final = res.join('-');
  return final;
}
