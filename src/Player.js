class Player {
  constructor(board) {
    self.board = board || new Board();
  }

  lookAtOwnBoard() {
    return self.board.showAlly();
  }

  placeShip(row, column) {
    self.board.addShip(row, column)
  }
}
