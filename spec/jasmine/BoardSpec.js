describe('drawBoard', function() {

  var board;
  beforeEach(function() {
    board = new Board();
  });

  describe('draws an empty board', function() {
    it('draws a board with 0 on it', function() {
      expect(board.draw()).toEqual('0')
    })
  })
})
