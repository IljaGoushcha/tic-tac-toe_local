$(document).ready(function() {

  // var myFirebaseRef = new Firebase("https://luminous-heat-2762.firebaseio.com/");
  // var tttCellsRef = myFirebaseRef.child("tttCells");

  var Cell = function(cellid, row, col, sym) {
    this.cellid = cellid;
    this.row = row;
    this.col = col;
    this.sym = sym;
  }

  var initializeGrid = function() {
    var grid = [];
    grid.push(new Cell(1, 1, 1, "empty"));
    grid.push(new Cell(2, 1, 2, "empty"));
    grid.push(new Cell(3, 1, 3, "empty"));
    grid.push(new Cell(4, 2, 1, "empty"));
    grid.push(new Cell(5, 2, 2, "empty"));
    grid.push(new Cell(6, 2, 3, "empty"));
    grid.push(new Cell(7, 3, 1, "empty"));
    grid.push(new Cell(8, 3, 2, "empty"));
    grid.push(new Cell(9, 3, 3, "empty"));
    return grid;
  }

  var Player = function(playerName, symbol) {
    this.playerName = playerName;
    this.symbol = symbol;
  }

  var createPlayer1 = function() {
    player1.playerName = $(this).val();
    player1.symbol = "X";
    $('.player1_name').hide();       //.val("Welcome, " + $(this).val());
    CurrentPlayer.displayName();
    $('.welcome').empty();
    $('.welcome').append("Welcome, " + $(this).val());
  }

  var createPlayer2 = function() {
    player2.playerName = $(this).val();
    player2.symbol = "O";
    $('.player2_name').hide();
    $('.welcome').append(" and " + $(this).val());
  }

  var CurrentPlayer = function(player) {
    this.player = player;
    this.displayName = function() {
      $('.current_player').empty();
      $('.current_player').append(this.player.playerName + ", your turn...");
    }
  }

  var makeMove = function() {
    tempid = parseInt((this.id));   //gets id of a cell clicked 1-9
    for (var i = 0; i < 9; i++) {
      if (tempid === grid[i].cellid) {    // looking for array element with same cellid as clicked 1-9
        if (grid[i].sym === "X" || grid[i].sym === "O") {
        } else {
          grid[i].sym = CurrentPlayer.player.symbol;
          if (CurrentPlayer.player.symbol === "X") {
            $(this).addClass('X');
            CurrentPlayer.player = player2;
          } else {
            $(this).addClass('O');
            CurrentPlayer.player = player1;
          }
        }
      } else {
      }
    }
    checkForWin(grid);
    CurrentPlayer.displayName();
  }

  var checkForWin = function(grid) {
    for (i = 0; i < 2; i++) {
      if (i === 0) {
        sym = "X";
      } else {
        sym = "O";
      }
      if (grid[0].sym === sym && grid[1].sym === sym && grid[2].sym === sym) {
        $('.current_player').empty();
        alert(sym + " won up horizontal");

      } else if (grid[3].sym === sym && grid[4].sym === sym && grid[5].sym === sym) {
        $('.current_player').empty();
        alert(sym + " won mid horizontal");
      } else if (grid[6].sym === sym && grid[7].sym === sym && grid[8].sym === sym) {
        $('.current_player').empty();
        alert(sym + " won down horizontal");
      } else if (grid[0].sym === sym && grid[3].sym === sym && grid[6].sym === sym) {
        $('.current_player').empty();
        alert(sym + " won left vertical");
      } else if (grid[1].sym === sym && grid[4].sym === sym && grid[7].sym === sym) {
        $('.current_player').empty();
        alert(sym + " won mid vertical");
      } else if (grid[2].sym === sym && grid[5].sym === sym && grid[8].sym === sym) {
        $('.current_player').empty();
        alert(sym + " won right vertical");
      } else if (grid[0].sym === sym && grid[4].sym === sym && grid[8].sym === sym) {
        $('.current_player').empty();
        alert(sym + " won diagonal down");
      } else if (grid[6].sym === sym && grid[4].sym === sym && grid[2].sym === sym) {
        $('.current_player').empty();
        alert(sym + " won diagonal up");
      }
    }
  }

  var resetGrid = function() {

  }

  var grid = initializeGrid();
  var player1 = new Player("guest 1", "X");
  var player2 = new Player("guest 2", "O");
  var CurrentPlayer = new CurrentPlayer(player1);
  // CurrentPlayer.displayName();
  $('.welcome').append("Play as guest or add names");

  $('.player1_name').on('change', createPlayer1);
  $('.player2_name').on('change', createPlayer2);
  $('.cell').on('click', makeMove);

});

  //initializeFirebase();
  //$('.cell').on('click', null, 'event data', modifyCell);

  //  var modifyCell = function() {
  //   id = parseInt((this.id));
  //   row = idsMap[id].row;
  //   col = idsMap[id].col;
  //   console.log(row);
  //   console.log(col);
  // }
  //   var initializeFirebase = function() {
  //   tttCellsRef.remove();

  //   for (i = 1; i < 4; i++) {
  //     tttCellsRef.push({cell: {row: i, column: 1, symbol: "nada"}});
  //     tttCellsRef.push({cell: {row: i, column: 2, symbol: "nada"}});
  //     tttCellsRef.push({cell: {row: i, column: 3, symbol: "nada"}});
  //   }
  // }
