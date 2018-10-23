//--------------------VARIABLES--------------------//

let game_matrix = [[null, null, null],
[null, null, null],
[null, null, null]];

//------------------END_VARIABLES------------------//
//
//--------------------LISTENERS--------------------//

document.getElementById("btn_reset").addEventListener("click", reset);
document.getElementById("a1").addEventListener("click", () => {
  putElement("a1");
});
document.getElementById("a2").addEventListener("click", () => {
  putElement("a2");
});
document.getElementById("a3").addEventListener("click", () => {
  putElement("a3");
});
document.getElementById("b1").addEventListener("click", () => {
  putElement("b1");
  });
document.getElementById("b2").addEventListener("click", () => {
  putElement("b2");
  });
document.getElementById("b3").addEventListener("click", () => {
  putElement("b3");
  });
document.getElementById("c1").addEventListener("click", () => {
  putElement("c1");
  });
document.getElementById("c2").addEventListener("click",  () => {
  putElement("c2");
  });
document.getElementById("c3").addEventListener("click",  () => {
  putElement("c3");
  });

//------------------END_LISTENERS------------------//

//--------------------FUNCTIONS--------------------//

var counter = 0;

//This function 
function putElement(id){

  console.log(id)
  if( counter === 0 ){
    document.getElementById(id).style.backgroundImage = 'url("../img/x.png")';
    switch(id){
      case 'a1': game_matrix[0][0] = 'X';
      break;
      case 'a2': game_matrix[0][1] = 'X';
      break;
      case 'a3': game_matrix[0][2] = 'X';
      break;
      case 'b1': game_matrix[1][0] = 'X';
      break;
      case 'b2': game_matrix[1][1] = 'X';
      break;
      case 'b3': game_matrix[1][2] = 'X';
      break;
      case 'c1': game_matrix[2][0] = 'X';
      break;
      case 'c2': game_matrix[2][1] = 'X';
      break;
      case 'c3': game_matrix[2][2] = 'X';
      break;
    }
   
    counter++; 

  }else if(counter === 1){
    document.getElementById(id).style.backgroundImage = 'url("../img/o.png")';
      switch(id){
      case 'a1': game_matrix[0][0] = 'O';
      break;
      case 'a2': game_matrix[0][1] = 'O';
      break;
      case 'a3': game_matrix[0][2] = 'O';
      break;
      case 'b1': game_matrix[1][0] = 'O';
      break;
      case 'b2': game_matrix[1][1] = 'O';
      break
      case 'b3': game_matrix[1][2] = 'O';
      break;
      case 'c1': game_matrix[2][0] = 'O';
      break;
      case 'c2': game_matrix[2][1] = 'O';
      break;
      case 'c3': game_matrix[2][2] = 'O';
      break;
    }
   
    counter--;
  }
}
  console.log(game_matrix);

function reset() {

}

// Compiling
// This function checks if the game has finished or not
function is_game_finished(game_matrix) {
  let check_win_X = [false, false, false];
  let check_win_O = [false, false, false];
  let counter = 0;
  let game_result = false;
  let return_variables = [];
  // Checking Rows 
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      // In case matrix has 'O'
      if (game_matrix[i][j] == 'O') {
        check_win_O[j] = true;
        counter++;
        if (check_win_O[0] == true && check_win_O[1] == true && check_win_O[2] == true) {
          console.log("O has won");
          return game_result = true;
        }
      }
      // In case matrix has 'X'
      if (game_matrix[i][j] == 'X') {
        check_win_X[j] = true;
        counter++;
        if (check_win_X[0] == true && check_win_X[1] == true && check_win_X[2] == true) {
          console.log("X has won");
          return game_result = true;
        }
      }
    }

    for (let k = 0; k < 3; k++) {
      check_win_O[k] = false;
    }
    for (k = 0; k < 3; k++) {
      check_win_X[k] = false;
    }
  }
  // Checking Columns
  for (j = 0; j < 3; j++) {
    for (i = 0; i < 3; i++) {
      // In case matrix has 'O'
      if (game_matrix[i][j] == 'O') {
        check_win_O[i] = true;
        counter++;
        if (check_win_O[0] == true && check_win_O[1] == true && check_win_O[2] == true) {
          console.log("O has won");
          return game_result = true;
        }
      }
      // In case matrix has 'X'
      if (game_matrix[i][j] == 'X') {
        check_win_X[i] = true;
        counter++;
        if (check_win_X[0] == true && check_win_X[1] == true && check_win_X[2] == true) {
          console.log("X has won");
          return game_result = true;
        }
      }
    }

    for (k = 0; k < 3; k++) {
      check_win_O[k] = false;
    }
    for (k = 0; k < 3; k++) {
      check_win_X[k] = false;
    }
  }
  // Checking diagonals
  if (game_matrix[0][0] == game_matrix[1][1] && game_matrix[0][0] == game_matrix[2][2]) {
    if (game_matrix[0][0] == 'X') {
      console.log("X has won");
      return game_result = true;
    }
    else {
      if (game_matrix[0][0] == 'O') {
        console.log("O has won");
        return game_result = true;
      }
    }
  }
  else {
    if (game_matrix[2][0] == game_matrix[1][1] && game_matrix[2][0] == game_matrix[0][2]) {
      if (game_matrix[2][0] == 'X') {
        console.log("X has won");
        return game_result = true;
      }
      else {
        if (game_matrix[2][0] == 'O') {
          console.log("O has won");
          return game_result = true;
        }
      }
    }
  }
  return_variables[0] = game_result;
  return_variables[1] = counter; // Counter passes 2 times in the matrix, that's why it goes 2 by 2.
  return [game_result, counter / 2]; // So it's divided by 2.
}

//------------------END_FUNCTIONS------------------//

