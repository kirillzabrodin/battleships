class Player {
  constructor(board) {
    self.board = board || new Board();
  }

  lookAtOwnBoard() {
    return self.board.showAlly();
  }

  placeShip(position, length) {
    self.board.addShip(position, length)
  }
}
