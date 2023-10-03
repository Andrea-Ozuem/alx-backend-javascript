export default function createInt8TypedArray(length, position, value) {
  const dv = new DataView(new ArrayBuffer(length));
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }
  dv.setInt8(position, value);
  return dv;
}
