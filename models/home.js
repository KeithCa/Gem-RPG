var tiles = require('../scripts/tiles/tiles.js');
var Enemies = require('../scripts/enemies/enemies.js');
var wood = tiles.tiles.wood;

Enemies.enemy.yarth.loc_x = 7;
Enemies.enemy.yarth.loc_y = 5;

var locations = { Home:
 {training_area:{
   map_type: "Combat",
   map: [
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
  actual: [
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
    Enemies: {
       Yarth : Enemies.enemy.yarth
     },
     player_loc_x : 7,
     player_loc_y : 10
}
}
}


locations["Home"]["training_area"]["actual"][5][7] = locations["Home"]["training_area"]["Enemies"]["Yarth"];

module.exports = locations;
