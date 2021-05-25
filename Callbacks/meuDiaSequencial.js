const consertarUmPneu = pneu => {
    pneu.consertado = true
    return pneu;
}
function receberPneu(contaDoBorracheiro) {
    console.log(`O preco de consertar o pneu foi de ${contaDoBorracheiro.preco}`);
}
function consertarPneu(pneus, callback) {
    pneus.map(pneu => consertarUmPneu(pneu));
    const preco = pneus.length;
    const contaDoCliente = {preco, impostos: 0.1};
    callback(contaDoCliente);
}

function receberComida(resultado) {
    console.log(`O preco da comida foi de ${resultado.preco}`);
}
function pedirComidaIFood(comida, callback) {
    callback({preco: 50});    
}

function fazerCafe(tipoCafe, quantidade, cb) {
    if (tipoCafe === 'expresso' && quantidade === 1) {
        cb({preco: 5});
    } else {
        cb({preco: 1});
    }
}

function notificarQuandoOFormularioForSalvo(cb) {
    cb({status: 200});
}

// chamar esta funcao com o resultado de todos os callbacks
function enviarRelatorioDoDia(relatorio) {    
    console.log(relatorio);
    // so essa funcao devera usar o console.log
}

function euSouPatraoMeuDia() {
    consertarPneu([], receberPneu);
    pedirComidaIFood("pastel", receberComida);
    fazerCafe('mocha', 10, function copinhoAmericano() {
        console.log(`O preco do cafe foi de ${JSON.stringify(arguments[0])}`);
    });
    notificarQuandoOFormularioForSalvo(function(resultado) {
        console.log(`O status de retorno foi: ${resultado.status}`);
    });
    //implementar aqui algum codigo que recebera os resultados, 
    // e enviara todos juntos no final para o enviarRelatorioDoDia
}

euSouPatraoMeuDia()