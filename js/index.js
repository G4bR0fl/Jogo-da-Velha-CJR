// Compiling
// This function creates and return a new game matrix each time it's called.
function create_matrix(){
  var game_matrix = [];
  for(var i = 0; i < 3; i++){
    game_matrix[i] = [];
    for(var j = 0; j < 3; j++){
      game_matrix[i][j] = null;
    }
  }
  return game_matrix;
}

// Compiling
// This function checks if the game has finished or not
function is_game_finished(game_matrix){
  var check_win_X = [false, false, false];
  var check_win_O = [false, false, false];

  var game_result = false;
  // Checking Rows 
  for(var i = 0; i < 3; i++){
    for(var j = 0; j < 3; j++){
      // In case matrix has 'O'
      if (game_matrix[i][j] == 'O'){
        check_win_O[j] = true;
        if (check_win_O[0] == true && check_win_O[1] == true && check_win_O[2] == true) {
          console.log("O has won");
          return gameresult = true;
        }
      }
      // In case matrix has 'X'
      if(game_matrix[i][j] == 'X'){
        check_win_X[j] = true;
        if (check_win_X[0] == true && check_win_X[1] == true && check_win_X[2] == true) {
          console.log("X has won");
          return gameresult = true;
        }
      }
    }

    for (var k = 0; k < 3; k++) {
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
        if (check_win_O[0] == true && check_win_O[1] == true && check_win_O[2] == true) {
          console.log("O has won");
          return gameresult = true;
        }
      }
      // In case matrix has 'X'
      if (game_matrix[i][j] == 'X') {
        check_win_X[i] = true; 
        if (check_win_X[0] == true && check_win_X[1] == true && check_win_X[2] == true) {
          console.log("X has won");
          return gameresult = true;
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
  if (game_matrix[0][0] == game_matrix[1][1] && game_matrix[0][0] == game_matrix[2][2]){
    console.log("Player has won");
    return game_result = true;
  }
  else{
    if (game_matrix[2][0] == game_matrix[1][1] && game_matrix[2][0] == game_matrix[0][2]) {
      console.log("Player has won");
      return game_result = true;
    }
  }
  return game_result;
}

function main() {
  game_matrix = create_matrix();

  game_matrix[0][0] = 'X';
  game_matrix[0][1] = 'O';
  game_matrix[0][2] = 'X';
  game_matrix[1][0] = 'X';
  game_matrix[1][1] = 'O';
  game_matrix[1][2] = 'O';
  game_matrix[2][0] = 'O';
  game_matrix[2][1] = 'X';
  game_matrix[2][2] = 'O';
  
  finish = is_game_finished(game_matrix);
  console.log(game_matrix.join("\n"));  
  console.log(finish);
}

main();