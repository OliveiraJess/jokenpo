var jogadorNome;
var jogadorEscolha;
var computadorEscolha;

//exibe mensagem
function mensagem(texto) {
    document.getElementById('mensagem').innerHTML = texto;
}

//definir nome do jogador
function definirJogadorNome(nome) {
    document.getElementById('jogador-nome').innerHTML = nome;
}

//gera numeros aleatorios
function sortear(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
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

//jogada usuario
function jogar(escolha) {
    //escolha usuario
    jogadorEscolha = escolha;
    //sorteia jogada computador
    computadorEscolha = sortear(1, 3);

    //calcular escolha
    var ganhador = calcularEscolha(jogadorEscolha, computadorEscolha)

    if (ganhador == 0) {
        mensagem('Empate');
    }
    else if (ganhador == 1) {
        mensagem('Jogador');
    }
    else if (ganhador == 2) {
        mensagem('Computador');
    }


}

document.getElementById('jogador-escolha-1').onclick = function () { jogar(1); };
document.getElementById('jogador-escolha-2').onclick = function () { jogar(2); };
document.getElementById('jogador-escolha-3').onclick = function () { jogar(3); };

jogadorNome = prompt("Qual é o seu nome?");
definirJogadorNome(jogadorNome);

mensagem('Bem-vindo ' + jogadorNome + ' está preparado? Escolha uma opção acima...');

