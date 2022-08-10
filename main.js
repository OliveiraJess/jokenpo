var jogadorNome;
var jogadorPontos = 0
var jogadorEscolha = 0;
var computadorPontos = 0
var computadorEscolha = 0;

//gera numeros aleatorios
function sortear(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//traduz o numero para pedra, papel ou tesoura
function traduzirEscolha(numero) {
    if (numero == 1) {
        return 'Pedra';
    }
    else if (numero == 2) {
        return 'Papel';
    }
    else if (numero == 3) {
        return 'Tesoura';
    }
}

//adiciona a classe selecionado.
function selecionar(tipo, escolha) {
    document.getElementById(tipo + '-escolha-' + escolha).classList.add('selecionado');
}

//remove a classe selecionado.
function deselecionar(tipo, escolha) {
    document.getElementById(tipo + '-escolha-' + escolha).classList.remove('selecionado');
}

//exibe mensagem
function mensagem(texto) {
    document.getElementById('mensagem').innerHTML = texto;
}

//definir nome do jogador
function definirJogadorNome(nome) {
    document.getElementById('jogador-nome').innerHTML = nome;
}

//calcular e retorna quem ganhou
function calcularEscolha(jogador, computador) {
    //jogadas

    //jogador pedra e computador é pedra = 0 empate
    if (jogador == 1 && computador == 1) {
        return 0;
    }
    //jogador pedra e computador é papel = 2 vitoria computador
    else if (jogador == 1 && computador == 2) {
        return 2;
    }
    //jogador pedra e computador é tesoura = 1 vitoria jogador
    else if (jogador == 1 && computador == 3) {
        return 1;
    }
    //jogador papel e computador é pedra = 1 vitoria jogador
    else if (jogador == 2 && computador == 1) {
        return 1;
    }
    //jogador papel e computador é papel = 0 empate
    else if (jogador == 2 && computador == 2) {
        return 0;
    }
    //jogador papel e computador é tesoura = 2 vitoria computador
    else if (jogador == 2 && computador == 3) {
        return 2;
    }
    //jogador tesoura e computador é pedra = 2 vitoria computador
    else if (jogador == 3 && computador == 1) {
        return 2;
    }
    //jogador tesoura e computador é papel = 1 vitoria jogador
    else if (jogador == 3 && computador == 2) {
        return 1;
    }
    //jogador tesoura e computador é tesoura = 0 empate
    else if (jogador == 3 && computador == 3) {
        return 0;
    }

}

//soma pontos jogador
function somarPontoJogador() {
    jogadorPontos++;
    document.getElementById('jogador-pontos').innerHTML = jogadorPontos;
}

//soma pontos computador
function somarPontoComputador() {
    computadorPontos++;
    document.getElementById('computador-pontos').innerHTML = computadorPontos;
}

//funçao jogar
function jogar(escolha) {
    //escolha usuario
    jogadorEscolha = escolha;
    selecionar('jogador', jogadorEscolha);

    //sorteia jogada computador
    computadorEscolha = sortear(1, 3);
    selecionar('computador', computadorEscolha);

    //calcular escolha
    var ganhador = calcularEscolha(jogadorEscolha, computadorEscolha);

    if (ganhador == 0) {
        mensagem('Empate');
    }
    else if (ganhador == 1) {
        mensagem('Ponto para ' + jogadorNome);
        somarPontoJogador();
    }
    else if (ganhador == 2) {
        mensagem('Ponto para Computador');
        somarPontoComputador();
    }

    setTimeout(function () {
        deselecionar('jogador', jogadorEscolha);
        deselecionar('computador', computadorEscolha);
        mensagem(jogadorNome + ' escolha uma opção...');
    }, 2500);

}

document.getElementById('jogador-escolha-1').onclick = function (){ jogar(1); };
document.getElementById('jogador-escolha-2').onclick = function (){ jogar(2); };
document.getElementById('jogador-escolha-3').onclick = function (){ jogar(3); };

jogadorNome = prompt("Qual é o seu nome?");


mensagem('Bem-vindo ' + jogadorNome + ' está preparado? Escolha uma opção acima...');
definirJogadorNome(jogadorNome);