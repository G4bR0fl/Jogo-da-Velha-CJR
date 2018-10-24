//--------------------VARIABLES--------------------//

let game_matrix = [[null, null, null],
                   [null, null, null],
                   [null, null, null]];

// obj for finding the correct position of an id in the matrix (seen as a vector)
let id_position = {
  'a1': 0,  
  'a2': 1,
  'a3': 2,
  'b1': 3,
  'b2': 4,
  'b3': 5,
  'c1': 6,
  'c2': 7,
  'c3': 8
}

//------------------END_VARIABLES------------------//
//
//--------------------LISTENERS--------------------//

document.getElementById("btn_reset").addEventListener("click", reset);

// loop for adding event listeners for all game boxes
for (p = 0; p < 9; p++) {
  document.getElementsByClassName("game_box")[p].addEventListener("click", (element) => {
    id = element.target.id;
    putElement(id, id_position[id]);
    is_game_finished(game_matrix);
  }); 
}

//------------------END_LISTENERS------------------//

//--------------------FUNCTIONS--------------------//

let counter = 0;

//This function 
function putElement(id, position){

  // current background image of element with 'id'
  let element = document.getElementById(id);
  
  // testing if its already marked for no more markings 
  if ( element.style.backgroundImage == "" ) {
    // var for the current value to be inserted in the game_matrix
    let current_char = null;
    
    if( counter === 0 ){
      element.style.backgroundImage = 'url("../img/x.png")'; //x
      current_char = 'X';
      counter++; 

    }else if(counter === 1){
      element.style.backgroundImage = 'url("../img/o.png")'; //o
      current_char = 'O';      
      counter--;
    }

    // Finding the correct position of the matrix to put the current_char
    let i, j, k = 0, achou = false;
    for (i = 0; i < 3 || !achou; i++) {
      for (j = 0; j < 3 || !achou; j++) {                  
        if (position == i + j + k) {
          game_matrix[i][j] = current_char;
          achou = true;
        }
      }
      k += 2; // responsible for traversing the game_matrix as a vector
    }
  }
}

function reset() {
  // reseting the matrix
  game_matrix = game_matrix.map( vet => vet.map( item  => null) );

  // reseting counter for always starting with X 
  counter = 0;

  // reseting images
  for (p = 0; p < 9; p++) 
    document.getElementsByClassName("game_box")[p].style.backgroundImage = null;
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
