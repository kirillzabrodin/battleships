describe('Game', () => {
  let player;
  let board;
  beforeEach(() => {
    board = new Board();
    player = new Player(board);
  });

  describe('#placeShip', function() {
    it('can place a ship on the board', function() {
      result = [[1,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0]]

      player.placeShip([0],[0])
      expect(player.lookAtOwnBoard()).toEqual(result)
    })
  })
});
