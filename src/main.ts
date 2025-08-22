// Snack 1 + BONUS

// let unknownData: unknown = null;

// if (typeof unknownData === 'string') {
//   console.log(unknownData.toUpperCase());
// } else if (typeof unknownData === 'number') {
//   console.log(unknownData * 2);
// } else if (typeof unknownData === 'boolean') {
//   console.log(unknownData ? 'Si' : 'No');
// } else if (unknownData === null) {
//   console.log('Il dato è vuoto');
// } else if (unknownData instanceof Array) {
//   console.log(unknownData.length);
// } else if (unknownData instanceof Promise) {
//   unknownData
//     .then(value => console.log(value))
//     .catch(e => console.log(e))
// } else {
//   console.log('Tipo non supportato');
// }

// Snack 2 + BONUS

type Dipendente = {
  nome: string,
  cognome: string,
  annoNascita: number,
  sesso: 'm' | 'f',
  anniDiServizio: number[]
}

// let dipendente: Dipendente = {
//   nome: 'Francesco',
//   cognome: 'Palazzo',
//   annoNascita: 1997,
//   sesso: 'm',
//   anniDiServizio: [2023, 2024, 2025]
// }