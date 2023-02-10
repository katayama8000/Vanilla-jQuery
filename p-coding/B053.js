//7*5の二次元配列
let board = new Array(5);
for (let i = 0; i < board.length; i++) {
    board[i] = new Array(7);
}

board[0][0] = 1;
board[0][1] = 5;
board[1][0] = -2;
board[1][1] = 1;


let diffHorizontal = [0, 0];
diffHorizontal[0] = board[0][1] - board[0][0];
diffHorizontal[1] = board[1][1] - board[1][0];

for (let i = 2; i < board[0].length; i++) {
    board[0][i] = board[0][i - 1] + diffHorizontal[0];
}

for (let i = 2; i < board[1].length; i++) {
    board[1][i] = board[1][i - 1] + diffHorizontal[1];
}

//縦の等差数列を作成
for (let i = 0; i < board[0].length; i++) {
    for (let j = 2; j < board.length; j++) {
        let diff = board[j - 1][i] - board[j - 2][i];
        board[j][i] = board[j - 1][i] + diff;
    }
}


for (let i = 0; i < board.length; i++) {
    console.log(...board[i]);
}