const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const a3 = a1.concat(a2, [7, 8, 9], 'Natanael');
console.log(a3);
//... rest -> ... spead
const a4 = [...a1, 'Natanael', ...a2, ...[7,8,9]]
console.log(a4);