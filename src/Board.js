class Board {
  constructor(name, level) {
    this.name = name;
    this.level = level;
    this.board = [[0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0]]
  }

  showAlly() {
    return this.board;
  }

  addShip(position, length) {
    for (let i = 0; i < length; i++) {
      this.board[position[0]][(position[1] + i)] = 1
    }
  }
}
