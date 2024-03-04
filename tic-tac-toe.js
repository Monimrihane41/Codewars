
function isSolved(board) {
    let winner = 0;
    let empty = 0;
    for (let i = 0; i < 3; i++) {
        if (board[i][0] === board[i][1] && board[i][0] === board[i][2]) {
        winner = board[i][0];
        }
        if (board[0][i] === board[1][i] && board[0][i] === board[2][i]) {
        winner = board[0][i];
        }
    }
    if (board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
        winner = board[0][0];
    }
    if (board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
        winner = board[0][2];
    }
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
        if (board[i][j] === 0) {
            empty++;
        }
        }
    }
    if (winner === 1) {
        return 1;
    } else if (winner === 2) {
        return 2;
    } else if (empty === 0) {
        return 0;
    } else {
        return -1;
    }
    }