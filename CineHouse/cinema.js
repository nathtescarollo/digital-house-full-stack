const catalogo = require('../database/catalogo.json');

const cinema = "Cine House";

const adicionarFilme = function (codigo, titulo, duracao, atores, anoDeLancamento, emCartaz) {
  const novoFilme = {
    codigo,
    titulo,
    duracao,
    atores,
    anoDeLancamento,
    emCartaz,
  };
  catalogo.push(novoFilme);
};

function imprimirFilmePelaPosicao(posicaoDoFilmeArray) {
    const filme = catalogo[posicaoDoFilmeArray];

    // Exemplo de formato esperado:
    // 1: Titanic, duração de 3 hora(s), atores: Kate Winslet, Leonardo DiCaprio, lançado em 1998, em cartaz: sim
    const codigoETitulo = filme.codigo + ": " + filme.titulo;
    const duracao = filme.duracao + " hora(s)";
    const atores = "atores: " + filme.atores.join(", ");
    const lancado = "lançado em " + filme.anoDeLancamento;
    const emCartaz = "em cartaz: " + (filme.emCartaz ? "sim" : "não");

    const textoDescritivoDoFilme = codigoETitulo + ", " + duracao + ", " + atores + ", " + lancado + ", " + emCartaz;

    console.log(textoDescritivoDoFilme);
};

const listarTodosOsFilmes = () => {
  for (let idx = 0; idx < catalogo.length; idx++) {
    imprimirFilmePelaPosicao(idx);
  }
}

const listarTodosOsFilmesEmCartaz = () => {
  for (let idx = 0; idx < catalogo.length; idx++) {
    const filme = catalogo[idx];

    if (filme.emCartaz) {
      imprimirFilmePelaPosicao(idx);
    }
  }
}

const alterarStatusEmCartaz = (posicaoDoFilmeArray) => {
  const filme = catalogo[posicaoDoFilmeArray];
  filme.emCartaz = filme.emCartaz ? false : true; // !filme.emCartaz;
}

module.exports = {
  cinema,
  catalogo,
  adicionarFilme,
  imprimirFilmePelaPosicao,
  listarTodosOsFilmes,
  listarTodosOsFilmesEmCartaz,
  alterarStatusEmCartaz
};


// Nota: 
// sempre dar preferência por utilizar o const em vez do let, por questões de performance