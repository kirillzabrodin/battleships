'use strict'

describe('Player', () => {
  let player;
  let board;
  beforeEach(() => {
    board = jasmine.createSpyObj('board', ['showAlly', 'addShip']);
    player = new Player(board);
  });

  describe('#placeShip', function() {
    it('calls board to show itself', function() {
      player.placeShip([0],[0])
      expect(board.addShip).toHaveBeenCalled()
    })
  })

  describe('#lookAtOwnBoard', function() {
    it('return your own board', function() {
      player.lookAtOwnBoard()
      expect(board.showAlly).toHaveBeenCalled()
    })
  })
});
