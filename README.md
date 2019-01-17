# Battleships tech test   [![Build Status](https://travis-ci.org/kirillzabrodin/battleships.svg?branch=master)](https://travis-ci.org/kirillzabrodin/battleships)   [![codecov](https://codecov.io/gh/kirillzabrodin/battleships/branch/master/graph/badge.svg)](https://codecov.io/gh/kirillzabrodin/battleships)

This is a basic Battleships app. It is a sample tech test to work on using a TDD style of development and writing SOLID code.

* [Kirill Zabrodin](https://github.com/kirillzabrodin)

### [User Stories](https://github.com/kirillzabrodin/battleships#user-stories) | [Installation](https://github.com/kirillzabrodin/battleships#installation) | [Usage](https://github.com/kirillzabrodin/battleships#usage) | [Tests](https://github.com/kirillzabrodin/battleships#tests) | [Example](https://github.com/kirillzabrodin/battleships#example) | [Contributing](https://github.com/kirillzabrodin/battleships#contributing)

## User stories
- [x]```As a player
So that I can prepare for the game
I would like to place a ship in a board location
```
User stories above this have been implemented using TDD.
```
As a player
So that I can play a more interesting game
I would like to have a range of ship sizes to choose from

As a player
So the game is more fun to play
I would like a nice command line interface that lets me enter ship positions and shots using commands (rather than using IRB to interact with objects)

As a player
So that I can create a layout of ships to outwit my opponent
I would like to be able to choose the directions my ships face in

As a player
So that I can have a coherent game
I would like ships to be constrained to be on the board

As a player
So that I can have a coherent game
I would like ships to be constrained not to overlap

As a player
So that I can win the game
I would like to be able to fire at my opponent's board

As a player
So that I can refine my strategy
I would like to know when I have sunk an opponent's ship

As a player
So that I know when to finish playing
I would like to know when I have won or lost

As a player
So that I can consider my next shot
I would like to be able to see my hits and misses so far

As a player
So that I can play against a human opponent
I would like to play a two-player game
```

### Installation

Clone the repo and run ```npm install``` to get all the testing dependencies.

### Usage

New players can be created via ```yourName = new Player()```. As long as Board is imported then the player will automatically configure a board. You can use ```yourName.lookAtOwnBoard()``` to see your own board and ```yourName.placeShip(row, column)``` to place a ship at that location. Rows and columns start at 0 and go to 9. If you then view your board you will see it have a 1 where you placed the ship.

### Tests

Testing is done via Jasmine. Run ```npm test``` to have jasmine run and results display to your terminal. This will also run the linter and test coverage.

Alternatively open SpecRunner.html in ./spec/jasmine in a browser for another format. This won't run the coverage or linter though. You can run the linter with ```npm run pretest```.

ESLint is used as the linter and Istanbul for coverage. ESLint is used with its recommended syntax notation.

Code tests won't run if linter doesn't pass and coverage reports can be found in the [coverage file](https://github.com/kirillzabrodin/battleships/tree/master/spec/jasmine/coverage).

### Example

```javascript
yourName = new Player()
*Player {}*
yourName.lookAtOwnBoard()
0: (10) [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1: (10) [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2: (10) [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3: (10) [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
4: (10) [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
5: (10) [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
6: (10) [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
7: (10) [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
8: (10) [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
9: (10) [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
yourName.placeShip(0, 0)
0: (10) [1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
1: (10) [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
2: (10) [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
3: (10) [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
4: (10) [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
5: (10) [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
6: (10) [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
7: (10) [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
8: (10) [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
9: (10) [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
```

### Contributing

To contribute submit a PR with a description of the new features implemented. If you change any functionality or structure within the codebase please describe what you changed and why.

When contributing all code must be fully tested and coverage must remain high.
