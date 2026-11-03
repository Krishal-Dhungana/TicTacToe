
// AUDIO
let audio = new Audio("gameover.mp3");

// GAME VARIABLES
let initialMove = "o";
let gameOver = false;


/********************************/
/* CHECK WINNING MOVES */

function checkWin() {
    let b = [];
    let cells = document.getElementsByClassName("boxes");

    for (let i = 0; i < 9; i++) {
        b[i + 1] = cells[i].innerHTML.trim();
    }

    // Winning combinations
    let wins = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],

        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],

        [1, 5, 9],
        [3, 5, 7]
    ];

    for (let x = 0; x < wins.length; x++) {

        let i = wins[x][0];
        let j = wins[x][1];
        let k = wins[x][2];

        if (
            b[i] !== "" &&
            b[i] === b[j] &&
            b[j] === b[k]
        ) {
            // Highlight winning boxes
            cells[i - 1].style.backgroundColor = "yellow";
            cells[j - 1].style.backgroundColor = "yellow";
            cells[k - 1].style.backgroundColor = "yellow";

            // Play sound
            audio.currentTime = 0;
            audio.play();

            return true;
        }
    }

    return false;
}


/********************************/
/* CHECK DRAW */

function checkDraw() {
    let cells = document.getElementsByClassName("boxes");

    return [...cells].every(cell =>
        cell.innerHTML.trim() !== ""
    );
}


/********************************/
/* CHECK WHETHER BOX IS EMPTY */

function isfull(id) {

    // Stop if game is over
    if (gameOver) return;

    let elem = document.getElementById(id);

    // Check whether box is already filled
    if (elem.innerHTML.trim() !== "") {
        alert("You can't move!");
        return;
    }

    // Place current player's move
    moves(initialMove, id);

    // Check winner
    if (checkWin()) {
        gameOver = true;
        alert(initialMove.toUpperCase() + " wins!");
        return;
    }

    // Check draw
    if (checkDraw()) {
        gameOver = true;
        alert("It's a Draw!");
        return;
    }

    // Switch player
    initialMove = initialMove === "o" ? "x" : "o";
}


/********************************/
/* PLACE PLAYER'S MOVE */

function moves(initialMoves, id) {

    let box = document.getElementById(id);

    box.innerHTML = initialMoves;

}


/********************************/
/* ADD CLICK EVENTS TO BOXES */

let boxes = document.getElementsByClassName("boxes");

for (let i = 0; i < boxes.length; i++) {

    boxes[i].addEventListener("click", function () {

        let id = this.id;

        isfull(id);

    });

}

/********************************/
