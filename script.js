/* to check wining moves */

 function checkWin() {

      if ( r1||r2||r3||c1||c2||c3||d1||d2)
      {
        alert("Game win")
      }
      else {
        alert("Game draws")
      }
}

  /* to check upcoming moves*/
function moves() {
    let initialMove="⭕" // ❌
  }






let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let b3 = document.getElementById("b3");
let b4 = document.getElementById("b4");
let b5 = document.getElementById("b5");
let b6 = document.getElementById("b6");
let b7 = document.getElementById("b7");
let b8 = document.getElementById("b8");
let b9 = document.getElementById("b9");
    
// let r1 = (b1===b2===b3)
// let r2= (b4===b5===b6)
// let r3= (b7===b8===b9)
    
// let c1= (b1===b4===b7)
// let c2= (b2===b5===b8)
// let c3 = (b3===b6===b9)
    
// let d1= (b1===b5===b9)
// let d2= (b3===b5===b7)

b1.addEventListener("click", () => {
  
})
