let board = ['', '', '', '', '', '', '', '', '']
let playerTime = 0
let symbols = ['o', 'x']

let handleMove = (position) => {
    board[position] = symbols[playerTime]

    if (playerTime == 0) {
        playerTime = 1
    } else {
        playerTime = 0
    }
}