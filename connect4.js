/** Connect Four
 *
 * Player 1 and 2 alternate turns. On each turn, a piece is dropped down a
 * column until a player gets four-in-a-row (horiz, vert, or diag) or until
 * board fills (tie)
 */

const WIDTH = 7;
const HEIGHT = 6;

let currPlayer = 1; // active player: 1 or 2
const board = Array(HEIGHT).fill(Array(WIDTH).fill(null)); // array of rows, each row is array of cells  (board[y][x])

//Below function unnecessary due to the way that const board is assigned at initialization. Cleaner to use Array(Y).fill(Array(X).fill(null))
// const makeBoard = () => {}
//   // TODO: set "board" to empty HEIGHT x WIDTH matrix array
  

const handleClick = evt => {
  // get x from ID of clicked cell
  const x = +evt.target.id;

  // get next spot in column (if none, ignore click)
  const y = findSpotForCol(x);
  if (y === null) {
    return;
  }

  // place piece in board and add to HTML table
  // TODO: add line to update in-memory board
  placeInTable(y, x);

  // check for win
  if (checkForWin()) {
    return endGame(`Player ${currPlayer} won!`);
  }

  // check for tie
  // TODO: check if all cells in board are filled; if so call, call endGame

  // switch players
  // TODO: switch currPlayer 1 <-> 2
}

const makeHtmlBoard = () => {
  const htmlBoard = document.querySelector('#board');
  const top = document.createElement("tr");
  top.setAttribute('id', 'column-top');
  top.addEventListener('click', handleClick);
  const width = board[0];
  width.forEach((value, index) => {
    console.log(index);
    const headCell = document.createElement('td');
    headCell.setAttribute('id', index);
    top.append(headCell);
  });
  htmlBoard.append(top);
  board.forEach((value, yindex) => {
    const row = document.createElement('tr');
    value.forEach((value, xindex) => {
      const cell = document.createElement('td');
      cell.setAttribute('id', `${yindex}-${xindex}`);
      row.append(cell);
    })
    htmlBoard.append(row);
  })
}
makeHtmlBoard();

/** findSpotForCol: given column x, return top empty y (null if filled) */

const findSpotForCol = x => {
  
}

/** placeInTable: update DOM to place piece into HTML table of board */

const placeInTable = (y, x) => {
  // TODO: make a div and insert into correct table cell
}

/** endGame: announce game end */

const endGame = msg => {
  // TODO: pop up alert message
}

/** handleClick: handle click of column top to play piece */



/** checkForWin: check board cell-by-cell for "does a win start here?" */

const checkForWin = () => {
  const _win = cells => {
    // Check four cells to see if they're all color of current player
    //  - cells: list of four (y, x) cells
    //  - returns true if all are legal coordinates & all match currPlayer

    //for every element in the selected cell
    cells.every(
      ([y, x]) =>
        //if all of the cells are on the board
        y >= 0 &&
        y < HEIGHT &&
        x >= 0 &&
        x < WIDTH &&
        //And all of the cells belong to the curent player
        board[y][x] === currPlayer
    );
  }

  // TODO: read and understand this code. Add comments to help you.
  //For every row
  for (let y = 0; y < HEIGHT; y++) {
    //for every column
    for (let x = 0; x < WIDTH; x++) {
      //calculate horizontal win (going right) of each cell
      const horiz = [[y, x], [y, x + 1], [y, x + 2], [y, x + 3]];
      //calculate vertical win (going up) of each cell
      const vert = [[y, x], [y + 1, x], [y + 2, x], [y + 3, x]];
      //calculate diagnonal win going down and to the right of each cell
      const diagDR = [[y, x], [y + 1, x + 1], [y + 2, x + 2], [y + 3, x + 3]];
      //calculate diagnonal win going down and to the left of each cell
      const diagDL = [[y, x], [y + 1, x - 1], [y + 2, x - 2], [y + 3, x - 3]];
      //for each cell, check if any one of the possible win scenarios is true
      if (_win(horiz) || _win(vert) || _win(diagDR) || _win(diagDL)) {
        return true;
      }
    }
  }
}

