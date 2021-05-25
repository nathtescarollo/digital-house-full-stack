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
    const atores = filme.atores.join(", ");

    const textoDescritivoDoFilme = `
      Filme:
      ------
      Código: ${filme.codigo},
      Título: ${filme.titulo},
      Duração: ${filme.duracao} hora(s),
      Atores: ${atores},
      Lançado em: ${filme.anoDeLancamento},
      Em cartaz: ${filme.emCartaz ? "Sim" : "Não"}
      `;
    
    // removendo quebras de linha e espacos:
    // `.replace(/\n/g, '').replace(/\s+/g, ' ')+'\n';

    console.log(textoDescritivoDoFilme);
};

function imprimirFilmePeloCodigo(codigoFilme) {
  const filme = catalogo.find(filme => filme.codigo === codigoFilme);
  const atores = filme.atores.join(", ");

  const textoDescritivoDoFilme = `
    Filme:
    ------
    Código: ${filme.codigo},
    Título: ${filme.titulo},
    Duração: ${filme.duracao} hora(s),
    Atores: ${atores},
    Lançado em: ${filme.anoDeLancamento},
    Em cartaz: ${filme.emCartaz ? "Sim" : "Não"}
    `;
  
  // removendo quebras de linha e espacos:
  // `.replace(/\n/g, '').replace(/\s+/g, ' ')+'\n';

  console.log(textoDescritivoDoFilme);
};

const listarTodosOsFilmes = () => {
  // for (let filme in catalogo) { imprimirFilmePelaPosicao(filme); }
  catalogo.forEach((filme, idx, arr) => { imprimirFilmePelaPosicao(idx) });
};

const listarTodosOsFilmesEmCartaz = () => {
  for (let idx = 0; idx < catalogo.length; idx++) {
    const filme = catalogo[idx];

    if (filme.emCartaz) {
      imprimirFilmePelaPosicao(idx);
    }
  }
}

function buscarFilme(posicaoDoFilmeNaArray, callback) {
  const filme = catalogo[posicaoDoFilmeNaArray];
  callback(filme);
  // setTimeout(callback, 5000, filme);
}

function alterarStatusEmCartaz(posicaoDoFilmeNaArray) {  
  buscarFilme(posicaoDoFilmeNaArray, function(filme) {
    const invertendoValorEmCartaz = !filme.emCartaz;
    filme.emCartaz = invertendoValorEmCartaz;
  });
}

function checarDuracao(callback) {
  const filmesFiltrados = catalogo.filter(filme => filme.duracao >= 2);
  callback(filmesFiltrados);
 }

// imprime filmes com duracao a partir de duas horas
// function listarFilmesDeLongaDuracao() {
//   checarDuracao(filmesFiltrados => {
//     filmesFiltrados.forEach((filme) => imprimirFilmePeloCodigo(filme.codigo))
//   });
// }

const listarFilmesDeLongaDuracao = () => {
  catalogo.forEach((filme, idx) => {
    if (filme.duracao >= 2) 
      imprimirFilmePelaPosicao(idx);
  });
}

const listarFilmesDeLongaDuracao2 = () => {
  const filmesFiltrados = catalogo.filter((filme) => filme.duracao >= 2);
  filmesFiltrados.forEach((filme) => {
    imprimirFilmePelaPosicao(filme.codigo - 1);
  });
}

const listarFilmesDeLongaDuracaoPeloCodigo = () =>
  catalogo
    .filter((filme) => filme.duracao >= 2)
    .forEach((filme) => {
      imprimirFilmePeloCodigo(filme.codigo);
})

module.exports = {
  cinema,
  catalogo,
  adicionarFilme,
  imprimirFilmePelaPosicao,
  imprimirFilmePeloCodigo,
  listarTodosOsFilmes,
  listarTodosOsFilmesEmCartaz,
  alterarStatusEmCartaz,
  listarFilmesDeLongaDuracao
};


// Nota: 
// sempre dar preferência por utilizar o const em vez do let, por questões de performance
