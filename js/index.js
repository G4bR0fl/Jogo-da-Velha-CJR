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
  var check_win = [false, false, false];
  var game_result = false;
  // Checking columns 
  for(var i = 0; i < 3; i++){
    for(var j = 0; j < 3; j++){
      // In case matrix has 'O'
      if (game_matrix[i][j] == 'O'){
        check_win[j] = true;
      }
      else{
        if (game_matrix[i][j] == null || (game_matrix[i][j] != 'O' && game_matrix[i][j] != 'X')){
          check_win = [false, false, false];
          break;
        }
      }
      // In case matrix has 'X'
      if(game_matrix[i][j] == 'X'){
        check_win[j] = true;
      }
      else{
        if (game_matrix[i][j] == null || (game_matrix[i][j] != 'O' && game_matrix[i][j] != 'X')){
          check_win = [false, false, false];
          break;
        }
      }
    }
    if(check_win[0] == true && check_win[1] == true && check_win[2] == true){
      console.log("Player has won");
      return gameresult = true;
    }
  }
  // Checking Rows
  for (j = 0; j < 3; j++) {
    for (i = 0; i < 3; i++) {
      // In case matrix has 'O'
      if (game_matrix[i][j] == 'O') {
        check_win[j] = true;
      }
      else {
        if (game_matrix[i][j] == null || (game_matrix[i][j] != 'O' && game_matrix[i][j] != 'X')) {
          check_win = [false, false, false];
          break;
        }
      }
      // In case matrix has 'X'
      if (game_matrix[i][j] == 'X') {
        check_win[j] = true;
      }
      else {
        if (game_matrix[i][j] == null || (game_matrix[i][j] != 'O' && game_matrix[i][j] != 'X')) {
          check_win = [false, false, false];
          break;
        }
      }
    }
    if (check_win[0] == true && check_win[1] == true && check_win[2] == true) {
      console.log("Player has won");
      return game_result = true;
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

