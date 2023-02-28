"use strict";

var randomMove = {
  run: function(creep) {
    let random = Game.time % 8;
    switch(random) {
      case 0:
        creep.move(TOP);
        break;
      case 1:
        creep.move(TOP_RIGHT);
        break;
      case 2:
        creep.move(RIGHT);
        break;
      case 3:
        creep.move(BOTTOM_RIGHT);
        break;
      case 4:
        creep.move(BOTTOM);
        break;
      case 5:
        creep.move(BOTTOM_LEFT);
        break;
      case 6:
        creep.move(LEFT);
        break;
      case 7:
        creep.move(TOP_LEFT);
        break;
    }
  }
}

module.exports = randomMove;