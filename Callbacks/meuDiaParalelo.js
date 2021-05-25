const consertarUmPneu = pneu => {
    pneu.consertado = true
    return pneu;
}
function receberPneu(contaDoBorracheiro) {
    return `O preco de consertar o pneu foi de ${contaDoBorracheiro.preco}\n`;
}
function consertarPneu(pneus, callback) {
    pneus.map(pneu => consertarUmPneu(pneu));
    const preco = pneus.length * 10;
    const contaDoCliente = {preco, impostos: 0.1};
    return callback(contaDoCliente);
}

function receberComida(resultado) {
    return `O preco da comida foi de ${resultado.preco}\n`;
}
function pedirComidaIFood(comida, callback) {
    return callback({preco: 50});    
}

function fazerCafe(tipoCafe, quantidade, cb) {
    if (tipoCafe === 'expresso' && quantidade === 1) {
        return cb({preco: 5});
    } else {
        return cb({preco: 1});
    }
}

function notificarQuandoOFormularioForSalvo(cb) {
    return cb({status: 200});
}

// chamar esta funcao com o resultado de todos os callbacks
// so essa funcao devera usar o console.log
function enviarRelatorioDoDia(relatorio) {    
    console.log(relatorio);
}

function euSouPatraoMeuDia() {
    // implementar aqui algum codigo que recebera os resultados, 
    // e enviara todos juntos no final para o enviarRelatorioDoDia
    let relatorio = "\n";

    relatorio += consertarPneu([{pneu: "dianteiro direito", consertado: false}], receberPneu);
    relatorio += pedirComidaIFood("pastel", receberComida);
    relatorio += fazerCafe('mocha', 10, function copinhoAmericano() {
        return `O preco do cafe foi de ${JSON.stringify(arguments[0].preco)}\n`;
    });
    relatorio += notificarQuandoOFormularioForSalvo(function(resultado) {
        return `O status de retorno foi: ${resultado.status}\n`;
    });

    enviarRelatorioDoDia(relatorio);
    // setTimeout(callback, 5000, filme);
}

euSouPatraoMeuDia()