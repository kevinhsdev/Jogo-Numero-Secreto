//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do Numero Secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Advinhe o numero entre 1 e 100';

let numerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatório();
let tentativas = 1;

// Função para alterar o texto do HTML, recebe a tag e o texto a ser inserido.
function alterarTextoHtml(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;

    // Verifica se o navegador suporta a API de síntese de voz e, se suportar, fala o texto em voz alta.
     if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 2.0; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}

// Função para exibir a mensagem inicial do jogo.
function mensagemInicial() {
    alterarTextoHtml('h1', 'Jogo do Numero Secreto');
    alterarTextoHtml('p', `Advinhe o numero entre 1 e ${numeroLimite}`);
}

mensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        palavraTentativa = tentativas == 1 ? 'tentativa' : 'tentativas';
        mensagemTentativa = `Você acertou o número secreto com ${tentativas} ${palavraTentativa}!`;
        alterarTextoHtml('h1', 'Parabéns!');
        alterarTextoHtml('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if (chute < numeroSecreto) {
        tentativas++;
        alterarTextoHtml('h1', 'Tente novamente!');
        alterarTextoHtml('p', 'O número secreto é maior do que ' + chute);
        limparCampoInput();
    } else {
        tentativas++;
        alterarTextoHtml('h1', 'Tente novamente!');
        alterarTextoHtml('p', 'O número secreto é menor do que ' + chute);
        limparCampoInput();
    }   
    console.log(numeroSecreto);
}

//Não deixa que o número seja repetido, caso seja, gera outro número.
function gerarNumeroAleatório() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite) + 1;
    let quantidadeElementos = numerosSorteados.length;

    // Limpa o array de números sorteados quando chegar a 100, para evitar que o jogo trave.
    if (quantidadeElementos == 100) {
        numerosSorteados = [];
    }

    if (numerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatório();
    } else {
        numerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

// Limpa o campo de input para o usuário não precisar apagar o número digitado anteriormente.
function limparCampoInput() {
    let campo = document.querySelector('input');
    campo.value = '';
}

// Reinicia o jogo, gerando um novo número, resetando as tentativas e a mensagem inicial.
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatório();
    tentativas = 1;
    mensagemInicial();
    limparCampoInput();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}