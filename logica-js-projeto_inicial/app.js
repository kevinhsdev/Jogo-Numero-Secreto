alert('Boas vindas ao jogo do numero secreto!');

//Para alterar a dificuldade do jogo, basta alterar o numeroMaximo para o valor desejado. Quanto maior o numeroMaximo, mais difícil será o jogo.
let numeroMaximo = 5000;

let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);

let chute;

let tentativas = 1;

console.log(numeroSecreto);

while (chute != numeroSecreto) {
        chute = prompt(`Digite um numero entre 1 e ${numeroMaximo}`);

    if (chute == numeroSecreto) {
       break;
    } else {
        if (chute > numeroSecreto) {
            alert('O numero secreto é menor que ' + chute + '!');
        } else {
            alert('O numero secreto é maior que ' + chute + '!');
        }
        //tentativas = tentativas + 1;
        tentativas++;
    }
}

let palavraTentativa = tentativas == 1 ? 'tentativa' : 'tentativas';
alert(`Isso ai! Você descobriu o numero secreto, ${numeroSecreto}! E acertou em ${tentativas} ${palavraTentativa}!`)
