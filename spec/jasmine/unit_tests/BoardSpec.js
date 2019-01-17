'use strict'

describe('Board', () => {
  let board;

  let emptyBoard = [[0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0]]

  beforeEach(() => {
    board = new Board();
  });

  describe('#showAlly', () => {
    it('draws an empty board', () => {
      expect(board.showAlly()).toEqual(emptyBoard);
    });
  });

  describe('#addShip', () => {
    it('adds a ship at location', () => {
      board.addShip([0,0], 1)
      expect(board.showAlly()[0][0]).toEqual(1);
    });

    it('adds ships of different lengths', () => {
      board.addShip([0,0], 4)
      for (let i = 0; i < 4; i++) {
        expect(board.showAlly()[0][i]).toEqual(1);
      }
    });
  });
});
