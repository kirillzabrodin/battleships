describe('drawBoard', () => {
  let board;
  beforeEach(() => {
    board = new Board();
  });

  describe('draws an empty board', () => {
    it('draws a board with 0 on it', () => {
      expect(board.draw()).toEqual('0');
    });
  });
});
