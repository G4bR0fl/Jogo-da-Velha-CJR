//--------------------VARIABLES--------------------//

let game_matrix = [[null, null, null],
                  [null, null, null],
                  [null, null, null]];


//------------------END_VARIABLES------------------//
//
//--------------------LISTENERS--------------------//

document.getElementById("btn_reset").addEventListener("click", reset);

let i; // Counter for adding event listeners for all game boxes
for (i = 0; i < 9; i++) {
  document.getElementsByClassName("game_box")[i].addEventListener("click", (element) => {
    putElement(element.target.id);
    is_finished = is_game_finished(game_matrix);
  }); 
}

//------------------END_LISTENERS------------------//

//--------------------FUNCTIONS--------------------//

let counter = 0;

//This function 
function putElement(id){

  // testing if its already marked for no more markings 
  if ( id == 'a1' && game_matrix[0][0] === null 
  || id == 'a2' && game_matrix[0][1] === null 
  || id == 'a3' && game_matrix[0][2] === null 
  || id == 'b1' && game_matrix[1][0] === null 
  || id == 'b2' && game_matrix[1][1] === null 
  || id == 'b3' && game_matrix[1][2] === null 
  || id == 'c1' && game_matrix[2][0] === null 
  || id == 'c2' && game_matrix[2][1] === null 
  || id == 'c3' && game_matrix[2][2] === null) {

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
}
function reset() {
   // reseting the matrix
   game_matrix = game_matrix.map( vet => vet.map( item  => null) );

   // reseting counter for always starting with X 
   counter = 0;

   // reseting images
   document.getElementById("a1").style.backgroundImage = null;
   document.getElementById("a2").style.backgroundImage = null;
   document.getElementById("a3").style.backgroundImage = null;
   document.getElementById("b1").style.backgroundImage = null;
   document.getElementById("b2").style.backgroundImage = null;
   document.getElementById("b3").style.backgroundImage = null;
   document.getElementById("c1").style.backgroundImage = null;
   document.getElementById("c2").style.backgroundImage = null;
   document.getElementById("c3").style.backgroundImage = null;

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
          alert("O has won");
          return game_result = true;
        }
      }
      // In case matrix has 'X'
      if (game_matrix[i][j] == 'X') {
        check_win_X[j] = true;
        counter++;
        if (check_win_X[0] == true && check_win_X[1] == true && check_win_X[2] == true) {
          alert("X has won");
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
          alert("O has won");
          return game_result = true;
        }
      }
      // In case matrix has 'X'
      if (game_matrix[i][j] == 'X') {
        check_win_X[i] = true;
        counter++;
        if (check_win_X[0] == true && check_win_X[1] == true && check_win_X[2] == true) {
          alert("X has won");
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
      alert("X has won");
      return game_result = true;
    }
    else {
      if (game_matrix[0][0] == 'O') {
        alert("O has won");
        return game_result = true;
      }
    }
  }
  else {
    if (game_matrix[2][0] == game_matrix[1][1] && game_matrix[2][0] == game_matrix[0][2]) {
      if (game_matrix[2][0] == 'X') {
        alert("X has won");
        return game_result = true;
      }
      else {
        if (game_matrix[2][0] == 'O') {
          alert("O has won");
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
