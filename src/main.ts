// Snack 1 + BONUS

let unknownData: unknown = null;

if (typeof unknownData === 'string') {
  console.log(unknownData.toUpperCase());
} else if (typeof unknownData === 'number') {
  console.log(unknownData * 2);
} else if (typeof unknownData === 'boolean') {
  console.log(unknownData ? 'Si' : 'No');
} else if (unknownData === null) {
  console.log('Il dato è vuoto');
} else if (unknownData instanceof Array) {
  console.log(unknownData.length);
} else if (unknownData instanceof Promise) {
  unknownData
    .then(value => console.log(value))
    .catch(e => console.log(e))
} else {
  console.log('Tipo non supportato');
}