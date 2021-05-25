const cinema = "Cine House";

const catalogo = [
  {
    codigo: 1,
    titulo: "Titanic",
    duracao: 3,
    atores: ["Kate Winslet", "Leonardo DiCaprio"],
    anoDeLancamento: 1998,
    emCartaz: true,
  },
  {
    codigo: 2,
    titulo: "Veloses e Furiosos 9",
    duracao: 2,
    atores: ["Vin Diesel", "The Rock", "Paul Walker"],
    anoDeLancamento: 2001,
    emCartaz: true,
  },
];

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

module.exports = {
  cinema,
  catalogo,
  adicionarFilme,
  imprimirFilmePelaPosicao
};

// Variacoes:
// module.exports = 'Cine House';
// module.exports.cinema = 'Cine House';

// Nota: sempre dar preferência por utilizar o const em vez do let, por questões de performance