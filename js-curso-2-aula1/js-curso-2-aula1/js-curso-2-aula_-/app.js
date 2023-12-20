var listaNumeroSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
function exibirTextoTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );
}


function mensagemIncial() {
    exibirTextoTela('h1', 'Jogo do Número secreto');
    exibirTextoTela('p', 'Escolha o número entre 1 e 10');
}

mensagemIncial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'Tentativas' : 'Tentativa';
        let mensagemTentativas = `Você descobriu o Número secreto com ${tentativas} ${palavraTentativa}`
        exibirTextoTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(chute > numeroSecreto){
            exibirTextoTela('p', 'O número secreto é menor.');
        } else {
            exibirTextoTela('p', 'O número secreto é maior.');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quanitdadeDeElementosNaLista = listaNumeroSorteados.length;

    if (quanitdadeDeElementosNaLista == numeroLimite){
        listaNumeroSorteados = [];
    }

    if(listaNumeroSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaNumeroSorteados.push(numeroEscolhido);
        console.log(listaNumeroSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemIncial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}