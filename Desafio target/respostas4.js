let SP = 67836.43, RJ = 36678.66, MG = 29229.88, ES = 27165.48, outros = 19849.53;
let total = SP + RJ + MG + ES + outros;

let percentualSp = (SP / total) * 100;
let percentualRj = (RJ / total) * 100;
let percentualMg = (MG / total) * 100;
let percentualEs = (ES / total) * 100;
let percentualOutros = (outros / total) * 100;

console.log(`SP: ${percentualSp.toFixed(2)}%;
RJ: ${percentualRj.toFixed(2)}%;
MG: ${percentualMg.toFixed(2)}%;
ES: ${percentualEs.toFixed(2)}%;
Outros ${percentualOutros.toFixed(2)}%;`)