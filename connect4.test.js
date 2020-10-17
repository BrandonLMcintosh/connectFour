describe('CheckForWin()', () => {
    afterEach(() => {
        board.forEach(val => val.fill(null));
    })
    it('should identify a horizontal win', () => {
        board[5][0] = '1';
        board[5][1] = '1';
        board[5][2] = '1';
        board[5][3] = '1';
        expect(checkForWin()).toEqual(true);
    })

    it('should identify a vertical win', () => {
        board[5][0] = '1';
        board[4][0] = '1';
        board[3][0] = '1';
        board[2][0] = '1';
        expect(checkForWin()).toEqual(true);
    })

    it('should identify a diagonal down-right win', () => {
        board[0][0] = '1';
        board[1][1] = '1';
        board[2][2] = '1';
        board[3][3] = '1';
        expect(checkForWin()).toEqual(true);
    })

    it('should identify a diagonal down-left win', () => {
        board[0][3] = '1';
        board[1][2] = '1';
        board[2][1] = '1';
        board[3][0] = '1';
        expect(checkForWin()).toEqual(true);
    })

    it('should return false for a non-win', () => {
        board[5][0] = '1';
        board[4][2] = '1';
        board[3][1] = '1';
        board[2][5] = '1';
        expect(checkForWin()).toEqual(false);
    })
})

describe('checkForTie()', () => {
    it('should return false for a non-tie', () => {
        
    })

    it('should return true for a tie', () => {
        
    })
})

describe('findSpotForCol()', () => {
    it('should return -1 for a full column', () => {

    })

    it('should return the correct y value for an non-full column', () => {

    })
})

describe('placeInTable()', () => {
    it('should successfully place a div at the provided coordinates within range', () => {

    })
})

describe('makeHtmlBoard', () => {
    it('should generate a board based on set height and width', () => {

    })

    it('should generate a board even if the width and height are set to 1', () => {

    })
})

describe('switchPlayer()', () => {
    it('should be player 1 when the move count is any odd number over 0', () => {

    })

    it('should be player 2 when the move count is any positive number over 0', () => {

    })

    it('should start out at player 1', () =>{

    })
})