export default function updateUniqueItems(map) {
  if (map instanceof Map) {
    for (const entry of map.entries()) {
      entry[1] = entry[1] === 1 ? 100 : entry[1];
      map.set(entry[0], entry[1]);
    }
  } else {
    throw new Error('Cannot process');
  }

  return map;
}
