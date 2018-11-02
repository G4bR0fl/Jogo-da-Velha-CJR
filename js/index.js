//--------------------VARIABLES--------------------//

let game_matrix = [[null, null, null],
[null, null, null],
[null, null, null]];

// Counter for victories, witch starts in zero
let x_vitorias = 0, o_vitorias = 0;

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

// tests if game is finished or not
let is_finished = false;

// Tells whitch turn it is: 0 for X`s and 1 for O`s
let counter = 0;

//------------------END_VARIABLES------------------//
//
//--------------------LISTENERS--------------------//

// Turns starts with X
document.getElementById("X").style.backgroundColor = "lightblue";

// Button which gets a clicking command to reset the game
document.getElementById("btn_reset").addEventListener("click", reset);

// loop for adding event listeners for all game boxes
for (p = 0; p < 9; p++) {
  document.getElementsByClassName("game_box")[p].addEventListener("click", (element) => {
    if (!is_finished) {
      id = element.target.id;
      putElement(id, id_position[id]);
      is_finished = is_game_finished(game_matrix);
      
      // Showing how many victories each one has
      if (is_finished == 1) { // X wins
        alert("X has won");
        x_vitorias++;
        document.getElementById("x_vitorias").innerHTML = x_vitorias;
        reset();
      }
      else if (is_finished == 2) { // O wins
        alert("O has won");
        o_vitorias++;
        document.getElementById("o_vitorias").innerHTML = o_vitorias;
        reset();
      }

      // Coloring according to the turn
      if (counter) {
        document.getElementById("X").style.backgroundColor = "";
        document.getElementById("O").style.backgroundColor = "lightblue";
      }
      else {
        document.getElementById("X").style.backgroundColor = "lightblue";
        document.getElementById("O").style.backgroundColor = "";        
      }
    }
  }); 
}

//------------------END_LISTENERS------------------//

//--------------------FUNCTIONS--------------------//


//This function put each element depending on whose turn it is, on the respective square selected.
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

// This function resets the game
function reset() {
  // reseting the matrix
  game_matrix = game_matrix.map( vet => vet.map( item  => null) );

  // reseting counter for always starting with X 
  counter = 0;

  // reseting turns 
  document.getElementById("X").style.backgroundColor = "lightblue";
  document.getElementById("O").style.backgroundColor = "";

  // reseting is_finished
  is_finished = false;

  // reseting images
  for (p = 0; p < 9; p++) 
    document.getElementsByClassName("game_box")[p].style.backgroundImage = null;
}

// This function checks if the game has finished or not.
function is_game_finished(game_matrix) {
  let check_win_X = [false, false, false];
  let check_win_O = [false, false, false];
  let counter = 0;
  let draw_counter = 0;
  let draw_checker = true;
  // Checking Rows 
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      // In case matrix has 'O'
      if (game_matrix[i][j] == 'O') {
        check_win_O[j] = true;
        counter++;
        draw_counter++;
        if (check_win_O[0] == true && check_win_O[1] == true && check_win_O[2] == true) {
          return 2; // game finished and O won
          draw_checker = false;
        }
      }
      // In case matrix has 'X'
      if (game_matrix[i][j] == 'X') {
        check_win_X[j] = true;
        counter++;
        draw_counter++;
        if (check_win_X[0] == true && check_win_X[1] == true && check_win_X[2] == true) {
          return 1; // game finished and X won
          draw_checker = false;
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
        draw_counter++;
        if (check_win_O[0] == true && check_win_O[1] == true && check_win_O[2] == true) {
          return 2; // game finished and O won
          draw_checker = false;
        }
      }
      // In case matrix has 'X'
      if (game_matrix[i][j] == 'X') {
        check_win_X[i] = true;
        counter++;
        draw_counter++;
        if (check_win_X[0] == true && check_win_X[1] == true && check_win_X[2] == true) {
          return 1; // game finished and X won
          draw_checker = false;
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
      return 1; // game finished and X won
      draw_checker = false;
    }
    else {
      if (game_matrix[0][0] == 'O') {
        return 2; // game finished and O won
        draw_checker = false;
      }
    }
  }
  else {
    if (game_matrix[2][0] == game_matrix[1][1] && game_matrix[2][0] == game_matrix[0][2]) {
      if (game_matrix[2][0] == 'X') {
        return 1; // game finished and X won
        draw_checker = false;
      }
      else {
        if (game_matrix[2][0] == 'O') {
          return 2; // game finished and O won
          draw_checker = false;
        }
      }
    }
  }
  if(draw_counter/2 == 9 && draw_checker == true){
    alert("Draw!");
  }
  return 0; // game not finished
}

//------------------END_FUNCTIONS------------------//
