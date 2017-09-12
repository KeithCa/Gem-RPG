var tiles = require('../scripts/tiles/tiles.js');
var Enemies = require('../scripts/enemies/enemies.js');
var wood = tiles.tiles.wood;

Enemies.enemy.yarth.loc_x = 7;
Enemies.enemy.yarth.loc_y = 5;

module.exports.location = { training_area: [
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
  training_area_actual: [
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
    ]
}




module.exports.enemies = {
  Yarth : Enemies.enemy.yarth
}
