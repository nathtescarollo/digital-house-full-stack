const cineHouse = require("./CineHouse/cinema.js");

cineHouse.adicionarFilme(3, "Matrix", 3, ["Keanu Reaves", "Laurence Fishburne"], 1999, true);

console.log();

const posicaoDesejada = 0;
console.log(`Filme ${posicaoDesejada+1}:`);
cineHouse.imprimirFilmePelaPosicao(posicaoDesejada);
console.log("\n---------------------------------\n");

console.log(`Alterando propriedade emCartaz do filme na posição ${posicaoDesejada}`);
cineHouse.alterarStatusEmCartaz(posicaoDesejada);
cineHouse.imprimirFilmePelaPosicao(posicaoDesejada);
console.log("\n---------------------------------\n");

console.log("Todos os filmes:");
cineHouse.listarTodosOsFilmes();
console.log("\n---------------------------------\n");

console.log("Filmes em cartaz:");
cineHouse.listarTodosOsFilmesEmCartaz();
console.log();

// console.log(cineHouse);
// console.log(cineHouse.cinema);
// console.log(cineHouse.catalogo[0].titulo)
// console.log(cineHouse.catalogo[0].atores[1])
// console.log(cineHouse.catalogo.pop())