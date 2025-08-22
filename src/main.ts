let unknownData: unknown = {};

if (typeof unknownData === 'string') {
  console.log(unknownData.toUpperCase());
} else if (typeof unknownData === 'number') {
  console.log(unknownData * 2);
} else if (typeof unknownData === 'boolean') {
  unknownData ? console.log('Si') : console.log('No');
} else {
  console.log('Tipo non supportato');
}