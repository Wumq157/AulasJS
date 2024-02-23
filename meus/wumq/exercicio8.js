// Obtém a referência ao elemento HTML com o ID 'board' e à classe '.message'.
const board = document.getElementById('board');
const message = document.querySelector('.message');

// Inicializa as variáveis do jogo.
let jogadorAtual = 'X'; // Define o jogador atual como 'X'.
let cells = Array(9).fill(''); // Cria um array vazio com 9 elementos para representar as células do tabuleiro.
let gameover = false; // Inicialmente, o jogo não está encerrado.

// Cria as células do tabuleiro e adiciona manipuladores de eventos de clique a cada uma.
for (let i = 0; i < 9; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell'); // Adiciona a classe 'cell' para estilização.
    cell.addEventListener('click', () => handleCellClick(i)); // Adiciona um evento de clique que chama a função handleCellClick com o índice da célula.
    board.appendChild(cell); // Adiciona a célula criada ao tabuleiro.
}

// Função que lida com o clique em uma célula.
function handleCellClick(index) {
    if (gameover || cells[index] !== '') return; // Se o jogo já terminou ou a célula já está preenchida, sai da função.

    cells[index] = jogadorAtual; // Registra a jogada do jogador atual no array de células.
    board.children[index].textContent = jogadorAtual; // Exibe o símbolo do jogador atual na célula clicada.

    if (checkWinner()) { // Verifica se há um vencedor.
        gameover = true; // O jogo termina.
        message.textContent = `Jogador ${jogadorAtual} venceu!`; // Exibe a mensagem de vitória.
    } else if (cells.every(cell => cell !== '')) { // Verifica se todas as células estão preenchidas, resultando em um empate.
        gameover = true; // O jogo termina.
        message.textContent = 'Empate!'; // Exibe a mensagem de empate.
    } else {
        jogadorAtual = jogadorAtual === 'X' ? 'O' : 'X'; // Alterna o jogador atual entre 'X' e 'O'.
        message.textContent = `Vez do Jogador ${jogadorAtual}`; // Exibe a mensagem de vez do jogador.
    }
}

// Função que verifica se há um vencedor com base nos padrões de vitória.
function checkWinner() {
    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    // Verifica cada padrão de vitória.
    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (cells[a] !== '' && cells[a] === cells[b] && cells[b] === cells[c]) {
            return true; // Se algum padrão de vitória for encontrado, retorna verdadeiro.
        }
    }

    return false; // Se nenhum padrão de vitória for encontrado, retorna falso.
}
const undoButton = document.getElementById('undoButton');
const resetButton = document.getElementById('resetButton');

undoButton.addEventListener('click', undoLastMove);
resetButton.addEventListener('click', resetGame);

// Função para voltar a jogada (undo).
function undoLastMove() {
    if (gameover) {
        return; // Não permitir voltar a jogada se o jogo já terminou.
    }

    // Encontra a última jogada válida.
    for (let i = cells.length - 1; i >= 0; i--) {
        if (cells[i] !== '') {
            cells[i] = ''; // Remove a jogada anterior.
            board.children[i].textContent = ''; // Limpa a célula no tabuleiro.
            jogadorAtual = jogadorAtual === 'X' ? 'O' : 'X'; // Alterna o jogador atual.
            message.textContent = `Vez do Jogador ${jogadorAtual}`; // Atualiza a mensagem de vez do jogador.
            break;
        }
    }
}

// Função para resetar o jogo.
function resetGame() {
    for (let i = 0; i < cells.length; i++) {
        cells[i] = ''; // Limpa todas as células.
        board.children[i].textContent = ''; // Limpa o conteúdo do tabuleiro.
    }
    jogadorAtual = 'X'; // Define o jogador atual como 'X'.
    gameover = false; // O jogo não está encerrado.
    message.textContent = 'Comece o Jogo'; // Exibe a mensagem inicial.
}
