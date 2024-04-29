export default function hasValuesFromArray(set, arr) {
  let count = 0;
  for (const item of arr) {
    if (set.has(item)) {
      count += 1;
    }
  }
  if (count === arr.length) {
    return true;
  }
  return false;
}
