// IMPORTS

let audio= new Audio("gameover.mp3")


/********************************/

/* to check wining moves */
function checkWin() {
  let b = [];
  let cells = document.getElementsByClassName('boxes');
  for (let i = 0; i < 9; i++){
    b[i + 1] = cells[i].innerHTML;
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

  for (let x = 0; x < wins.length; x++){
    let i = wins[x][0];
    let j = wins[x][1];
    let k = wins[x][2];

    if (b[i] !== "" && b[i] === b[j] && b[j] === b[k]) {
     
      audio.play();
      cells[i - 1].style.backgroundColor = "yellow";
      cells[j - 1].style.backgroundColor = "yellow";
      cells[k - 1].style.backgroundColor = "yellow";

      return true; 
    }

      
    
  }
   if (b.slice(1).every(cell => cell !== ""))
    {
    alert("It's a Draw!");
}
  return false;
}

/* to check whether box got values or not*/
let initialMove = 'o';
let gameOver = false;
function isfull(id) {
  if (gameOver===true)
    return;

  let elem = document.getElementById(id);

  if (elem.innerHTML === "") {
    moves(initialMove, id);

    if (checkWin()) {
      gameOver = true;
      return;
    }
    // else if (checkDraw()){
      
    // }
    initialMove = initialMove === "o" ? "x" : "o";
  } else {
    alert("You can't move!");
  }
}

/* to check upcoming moves*/

function moves(initialMoves, id) {
  let box = document.getElementById(id);
  box.innerHTML = initialMoves;

}

for (let i = 0; i <= 8; i++) {
  let boxes = document.getElementsByClassName('boxes')[i].addEventListener("click", function () {
    let id = this.id

    isfull(id);


  })
}

/*************************************************/