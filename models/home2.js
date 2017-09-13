var tiles = require('../scripts/tiles/tiles.js');
var Enemies = require('../scripts/enemies/enemies.js');
var wood = tiles.tiles.wood;

Enemies.enemy.yarth.loc_x = 7;
Enemies.enemy.yarth.loc_y = 5;

var locations = { Home:
 { training_area_2: [
      [wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood],
      [wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood],
      [wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood],
      [wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood],
      [wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood],
      [wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood],
      [wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood],
      [wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood],
      [wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood],
      [wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood],
      [wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood],
      [wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood],
  ],
  training_area_2_actual: [
        [wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood],
        [wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood],
        [wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood],
        [wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood],
        [wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood],
        [wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood],
        [wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood],
        [wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood],
        [wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood],
        [wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood],
        [wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood],
        [wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood,wood],
    ],
    Yarth_2 : Enemies.enemy.yarth
}
}


module.exports = locations;
