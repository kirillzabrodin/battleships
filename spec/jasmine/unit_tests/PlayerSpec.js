'use strict'

describe('Player', () => {
  let player;
  let board;
  beforeEach(() => {
    board = jasmine.createSpyObj('board', ['showAlly', 'addShip']);
    player = new Player(board);
  });

  describe('#placeShip', function() {
    it('places ship on board', function() {
      player.placeShip([0,0], 'horizontal', 1)
      expect(board.addShip).toHaveBeenCalledWith([0,0], 'horizontal', 1)
    })

    it('ships can vary in length', function() {
      player.placeShip([0,0], 'horizontal', 4)
      expect(board.addShip).toHaveBeenCalledWith([0,0], 'horizontal', 4)
    })

    it('ships can vary direction', function() {
      player.placeShip([0,0], 'vertical', 5)
      expect(board.addShip).toHaveBeenCalledWith([0,0], 'vertical', 5)
    })
  })

  describe('#lookAtOwnBoard', function() {
    it('return your own board', function() {
      player.lookAtOwnBoard()
      expect(board.showAlly).toHaveBeenCalled()
    })
  })
});
