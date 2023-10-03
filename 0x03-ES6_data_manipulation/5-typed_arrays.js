export default function createInt8TypedArray(length, position, value) {
  const dv = new DataView(new ArrayBuffer(length));
  try {
    dv.setInt8(position, value);
  } catch (e) {
    console.error('Position outside range');
  }
  return dv;
}
