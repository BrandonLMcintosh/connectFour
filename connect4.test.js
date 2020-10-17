let test;
describe('CheckForWin()', () => {
    afterEach(() => {
        currPlayer = 1;
        HEIGHT = 6;
        WIDTH = 7;
        board = new Array(HEIGHT).fill(new Array(WIDTH).fill(null)).map((x) => x.map(y => y));
    })
    it('should identify a horizontal win', () => {
        board[5][0] = 1;
        board[5][1] = 1;
        board[5][2] = 1;
        board[5][3] = 1;
        expect(checkForWin()).toEqual(true);
    })

    it('should identify a vertical win', () => {
        board[5][0] = 1;
        board[4][0] = 1;
        board[3][0] = 1;
        board[2][0] = 1;
        expect(checkForWin()).toEqual(true);
    })

    it('should identify a diagonal down-right win', () => {
        board[0][0] = 1;
        board[1][1] = 1;
        board[2][2] = 1;
        board[3][3] = 1;
        expect(checkForWin()).toEqual(true);
    })

    it('should identify a diagonal down-left win', () => {
        board[0][3] = 1;
        board[1][2] = 1;
        board[2][1] = 1;
        board[3][0] = 1;
        expect(checkForWin()).toEqual(true);
    })

    it('should return false for a non-win', () => {
        board[5][0] = 1;
        board[4][2] = 1;
        board[3][1] = 1;
        board[2][5] = 1;
        console.log(board);
        expect(checkForWin()).toEqual(false);
    })
})
describe('win()', () => {
    afterEach(() => {
        currPlayer = 1;
        HEIGHT = 6;
        WIDTH = 7;
        board = new Array(HEIGHT).fill(new Array(WIDTH).fill(null)).map((x) => x.map(y => y));
    })
    it('should calculate a win for a horizontal set', () => {
        board[5][0] = 1;
        board[5][1] = 1;
        board[5][2] = 1;
        board[5][3] = 1;
        test = [[5,0],[5,1],[5,2],[5,3]];
        expect(win(test)).toEqual(true);
    })

    it('should calculate a win for a vertical set', () => {
        board[5][0] = 1;
        board[4][0] = 1;
        board[3][0] = 1;
        board[2][0] = 1;
        test = [[5,0],[4,0],[3,0],[2,0]];
        expect(win(test)).toEqual(true);
    })

    it('should calculate a win for a diagonal down-right set', () => {
        board[0][0] = 1;
        board[1][1] = 1;
        board[2][2] = 1;
        board[3][3] = 1;
        test = [[0,0],[1,1],[2,2],[3,3]];
        expect(win(test)).toEqual(true);
    })

    it('should calculate a win for a diagonal down-left set', () => {
        board[0][3] = 1;
        board[1][2] = 1;
        board[2][1] = 1;
        board[3][0] = 1;
        test = [[0,3],[1,2],[2,1],[3,0]];
        expect(win(test)).toEqual(true);
    })

    it('should not calculate a win for a horizontal set that doesnt all belong to the same person', () => {
        board[5][0] = 2;
        board[5][1] = 1;
        board[5][2] = 1;
        board[5][3] = 1;
        currPlayer = 1;
        test = [[5,0],[5,1],[5,2],[5,3]];
        expect(win(test)).toEqual(false);
    })

    it('should not calculate a win for a vertical set that doesnt all belong to ther same person', () => {
        board[5][0] = 1;
        board[4][0] = 2;
        board[3][0] = 1;
        board[2][0] = 1;
        currPlayer = 1;
        test = [[5,0],[4,0],[3,0],[2,0]];
        expect(win(test)).toEqual(false);
        
    })

    it('should not calculate a win for a diagonal down-right set that doesnt all belong to ther same person', () => {
        board[0][0] = 1;
        board[1][1] = 1;
        board[2][2] = 1;
        board[3][3] = 2;
        currPlayer = 2;
        test = [[0,0],[1,1],[2,2],[3,3]];
        expect(win(test)).toEqual(false);
        
    })

    it('should not calculate a win for a diagonal down-left set that doesnt all belong to ther same person', () => {
        board[0][3] = 1;
        board[1][2] = 1;
        board[2][1] = 2;
        board[3][0] = 1;
        currPlayer = 2;
        test = [[0,3],[1,2],[2,1],[3,0]];
        expect(win(test)).toEqual(false);
    })

    it('should not calculate a horizontal set out of range', () => {
        test = [[HEIGHT-1, -1],[HEIGHT-1, 0],[HEIGHT-1, 1],[HEIGHT-1, 2]];
        expect(win(test)).toEqual(false);
    })

    it('should not calculate a vertical set out of range', () => {
        test = [[HEIGHT, 0],[HEIGHT-1, 0],[HEIGHT-2, 0],[HEIGHT-3, 0]];
        expect(win(test)).toEqual(false);

    })

    it('should not calculate a diagonal down-right set out of range', () => {
        test = [[HEIGHT, WIDTH],[HEIGHT-1, WIDTH-1],[HEIGHT-2, WIDTH-2],[HEIGHT-3, WIDTH-3]];
        expect(win(test)).toEqual(false);
    })

    it('should not calculate a diagonal down-left set out of range', () => {
        test = [[0,WIDTH],[1, WIDTH-1],[2,WIDTH-2],[3, WIDTH-3]]
        expect(win(test)).toEqual(false);
    })
})

describe('checkForTie()', () => {
    afterEach(() => {
        currPlayer = 1;
        HEIGHT = 6;
        WIDTH = 7;
        board = new Array(HEIGHT).fill(new Array(WIDTH).fill(null)).map((x) => x.map(y => y));
    })
    it('should return false for a non-tie', () => {
        board.forEach(value => value.fill(1));
        board[HEIGHT-1][WIDTH-1] = null;
        expect(checkForTie()).toEqual(false);
    })

    it('should return true for a tie', () => {
        board.forEach(value => value.fill(1));
        expect(checkForTie()).toEqual(true);
    })
})

describe('findSpotForCol()', () => {
    afterEach(() => {
        currPlayer = 1;
        HEIGHT = 6;
        WIDTH = 7;
        board = new Array(HEIGHT).fill(new Array(WIDTH).fill(null)).map((x) => x.map(y => y));
    })
    it('should return -1 for a full column', () => {
        board.forEach(value => value[0] = 1);
        expect(findSpotForCol(0)).toEqual(-1);
    })

    it('should return the correct y value for an non-full column', () => {
        board.forEach(value => value[0] = 1);
        board[0][0] = null;
        expect(findSpotForCol(0)).toEqual(0);
    })
})

describe('placeInTable()', () => {
    afterEach(() => {
        currPlayer = 1;
        HEIGHT = 6;
        WIDTH = 7;
        board = new Array(HEIGHT).fill(new Array(WIDTH).fill(null)).map((x) => x.map(y => y));
    })
    it('should successfully place a div at the provided coordinates within range', () => {
        makeHtmlBoard();
        placeInTable(0,0);
        expect(document.getElementById('0-0').hasChildNodes()).toEqual(true);
    })
})

describe('makeHtmlBoard', () => {
    afterEach(() => {
        currPlayer = 1;
        HEIGHT = 6;
        WIDTH = 7;
        board = new Array(HEIGHT).fill(new Array(WIDTH).fill(null)).map((x) => x.map(y => y));
    })
    it('should generate a board based on set height and width', () => {
        HEIGHT = 5;
        WIDTH = 3;
        board = new Array(HEIGHT).fill(new Array(WIDTH).fill(null)).map((x) => x.map(y => y));
        makeHtmlBoard();
        const test = document.querySelectorAll('.cell')
        expect(test.length).toEqual(15);
    })

    it('should generate a board even if the width and height are set to 1', () => {
        HEIGHT = 1;
        WIDTH = 1;
        board = new Array(HEIGHT).fill(new Array(WIDTH).fill(null)).map((x) => x.map(y => y));
        makeHtmlBoard();
        const test = document.querySelectorAll('.cell')
        expect(test.length).toEqual(1);
    })
})

describe('switchPlayer()', () => {
    afterEach(() => {
        currPlayer = 1;
        HEIGHT = 6;
        WIDTH = 7;
        moves = 0;
        board = new Array(HEIGHT).fill(new Array(WIDTH).fill(null)).map((x) => x.map(y => y));
    })
    it('should be player 2 when the move count is any odd number over 0', () => {
        moves = 5;
        switchPlayer();
        expect(currPlayer).toEqual(2);
    })

    it('should be player 1 when the move count is any positive number over 0', () => {
        moves = 8;
        switchPlayer();
        expect(currPlayer).toEqual(1);
    })
})