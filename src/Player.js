class Player {
  constructor(board) {
    self.board = board || new Board();
  }

  lookAtOwnBoard() {
    return self.board.showAlly();
  }

  placeShip(position, direction, length) {
    self.board.addShip(position, direction, length)
  }
}
