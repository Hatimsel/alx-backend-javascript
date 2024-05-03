export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);

  const typedArr = new DataView(buffer, 0, length);

  try {
    typedArr.setInt8(position, value);
  } catch (error) {
    throw new Error('Position outside range');
  }

  return typedArr;
}
