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
  var counter = 0; 
  var game_result = false;
  var return_variables = [];
  // Checking Rows 
  for(var i = 0; i < 3; i++){
    for(var j = 0; j < 3; j++){
      // In case matrix has 'O'
      if (game_matrix[i][j] == 'O'){
        check_win_O[j] = true;
        counter++;
        if (check_win_O[0] == true && check_win_O[1] == true && check_win_O[2] == true) {
          console.log("O has won");
          return game_result = true;
        }
      }
      // In case matrix has 'X'
      if(game_matrix[i][j] == 'X'){
        check_win_X[j] = true;
        counter++;
        if (check_win_X[0] == true && check_win_X[1] == true && check_win_X[2] == true) {
          console.log("X has won");
          return game_result = true;
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
  if (game_matrix[0][0] == game_matrix[1][1] && game_matrix[0][0] == game_matrix[2][2]){
    if (game_matrix[0][0] == 'X'){
      console.log("X has won");
      return game_result = true;
    }
    else{
      if (game_matrix[0][0] == 'O'){
        console.log("O has won");
        return game_result = true;
      }
    }
  }
  else{
    if (game_matrix[2][0] == game_matrix[1][1] && game_matrix[2][0] == game_matrix[0][2]) {
      if (game_matrix[2][0] == 'X') {
        console.log("X has won");
        return game_result = true;
      }
      else {
        if (game_matrix[2][0] == 'O'){
          console.log("O has won");
          return game_result = true;
        }
      }
    }
  }
  return_variables[0] = game_result;
  return_variables[1] = counter; // Counter passes 2 times in the matrix, that's why it goes 2 by 2.
  return [game_result, counter/2]; // So it's divided by 2.
}

