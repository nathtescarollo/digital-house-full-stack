const cineHouse = require("./CineHouse/cinema.js");

cineHouse.adicionarFilme(3, "Matrix", 3, ["Keanu Reaves", "Laurence Fishburne"], 1999, true);
cineHouse.adicionarFilme(4, "Sexta-Feira Muito Louca", 1.5, ["Lindsay Lohan", "Jamie Lee Curtis"], 2003, true);


console.log();

const posicaoDesejada = 0;
console.log(`Filme ${posicaoDesejada+1}:`);
cineHouse.imprimirFilmePelaPosicao(posicaoDesejada);
console.log("---------------------------------\n");

console.log(`Alterando propriedade emCartaz do filme na posição ${posicaoDesejada}`);
cineHouse.alterarStatusEmCartaz(posicaoDesejada);
cineHouse.imprimirFilmePelaPosicao(posicaoDesejada);
console.log("---------------------------------\n");

console.log("Todos os filmes:");
cineHouse.listarTodosOsFilmes();
console.log("---------------------------------\n");

console.log("Filmes em cartaz:");
cineHouse.listarTodosOsFilmesEmCartaz();
console.log("---------------------------------\n");

console.log("Filmes de longa duração:");
cineHouse.listarFilmesDeLongaDuracao();
console.log();

// console.log(cineHouse);
// console.log(cineHouse.cinema);
// console.log(cineHouse.catalogo[0].titulo)
// console.log(cineHouse.catalogo[0].atores[1])
// console.log(cineHouse.catalogo.pop())