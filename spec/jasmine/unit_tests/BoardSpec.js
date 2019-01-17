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
      board.addShip([0],[0])
      expect(board.showAlly()[0][0]).toEqual(1);
    });
  });
});
