const gameBoard = document.querySelector('#game-board');
const blocks = [
    [[1, 1], [1, 1]],
    [[1, 1, 1, 1]],
    [[1, 1, 0], [0, 1, 1]],
    [[0, 1, 1], [1, 1, 0]],
    [[1, 0, 0], [1, 1, 1]],
    [[0, 0, 1], [1, 1, 1]],
    [[1, 1, 1], [0, 1, 0]]
];
const colors = ['blue', 'red', 'green', 'yellow', 'purple', 'orange', 'pink'];
let currentBlock = { shape: [], x: 0, y: 0 };
let timerId = null;
let score = 0;

function init() {
    gameBoard.innerHTML = '';
    currentBlock = { shape: blocks[Math.floor(Math.random() * blocks.length)], x: 0, y: 0 };
    drawBlock();
    score = 0;
}

function drawBlock() {
    currentBlock.shape.forEach((row, i) => {
        row.forEach((cell, j) => {
            if (cell) {
                const block = document.createElement('div');
                block.classList.add('block');
                block.style.left = `${currentBlock.x + j * 20}px`;
                block.style.top = `${currentBlock.y + i * 20}px`;
                block.style.backgroundColor = colors[blocks.indexOf(currentBlock.shape)];
                gameBoard.appendChild(block);
            }
        });
    });
}

function eraseBlock() {
    document.querySelectorAll('.block').forEach(block => block.remove());
}

function moveDown() {
    eraseBlock();
    currentBlock.y += 20;
    drawBlock();
}

function moveLeft() {
    eraseBlock();
    currentBlock.x -= 20;
    drawBlock();
}

function moveRight() {
    eraseBlock();
    currentBlock.x += 20;
    drawBlock();
}

function rotate() {
    eraseBlock();
    currentBlock.shape = currentBlock.shape[0].map((_, i) => currentBlock.shape.map(row => row[i]).reverse());
    drawBlock();
}

function checkCollisions() {
    const nextY = currentBlock.y + 20 * currentBlock.shape.length;
    if (nextY > gameBoard.clientHeight) {
        return true;
    }
    const blocks = Array.from(document.querySelectorAll('.block'));
    const currentBlocks = blocks.filter(b => b.style.top === `${currentBlock.y + 20}px`);
    const nextBlocks = blocks.filter(b => b.style.top === `${nextY}px`);
    const currentXs = currentBlocks.map(b => Number.parseInt(b.style.left));
    const nextXs = nextBlocks.map(b => Number.parseInt(b.style.left));
    return currentXs.some(x => nextXs.includes(x));
}

function checkRows() {
    const squares = Array.from(document.querySelectorAll('.block'));
    const rows = Array.from(new Set(squares.map(b => b.style.top)));
    rows.forEach(row => {
        const blocks = squares.filter(b => b.style.top === row);
        if (blocks.length === 10) {
            blocks.forEach(b => b.remove());
            squares.filter(b => Number.parseInt(b.style.top < row)).forEach(b => {
                b.style.top = `${Number.parseInt(b.style.top) + 20}px`;
            });
            score += 10;
        }
    });
    updateScore();
}

function updateScore() {
    const scoreElement = document.querySelector('#score');
    scoreElement.textContent = `Score: ${score}`;
}

function gameOver() {
    clearInterval(timerId);
    alert(`Game over! Your score is ${score}.`);
}

function startGame() {
    init();
    timerId = setInterval(() => {
        if (!checkCollisions()) {
            moveDown();
        } else {
            if (currentBlock.y === 0) {
                gameOver();
            } else {
                checkRows();
                init();
            }
        }
    }, 500);
}

document.addEventListener('keydown', event => {
    switch (event.key) {
        case 'ArrowLeft':
            moveLeft();
            break;
        case 'ArrowRight':
            moveRight();
            break;
        case 'ArrowDown':
            moveDown();
            break;
        case 'ArrowUp':
            rotate();
            break;
        case ' ':
            clearInterval(timerId);
            break;
        case 'Enter':
            startGame();
            break;
    }
});

updateScore();