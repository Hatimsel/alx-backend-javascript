export default function cleanSet(set, startString) {
  let cleanedSet = '';

  if (startString.length === 0) {
    return cleanedSet;
  }

  for (const item of set) {
    if (item.startsWith(startString)) {
      cleanedSet += `${item.slice(startString.length)}-`;
    }
  }
  return cleanedSet.substring(0, cleanedSet.length - 1);
}
