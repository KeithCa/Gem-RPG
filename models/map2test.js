var tiles = require('../scripts/tiles/tiles.js');

var wood = tiles.tiles.wood;

module.exports.training_area = [
      [wood,wood,wood,wood,wood,wood,wood,wood],
      [wood,wood,wood,wood,wood,wood,wood,wood],
      [wood,wood,wood,wood,wood,wood,wood,wood],
      [wood,wood,wood,wood,wood,wood,wood,wood],
      [wood,wood,wood,wood,wood,wood,wood,wood],
      [wood,wood,wood,wood,wood,wood,wood,wood],
      [wood,wood,wood,wood,wood,wood,wood,wood],
      [wood,wood,wood,wood,wood,wood,wood,wood],
      [wood,wood,wood,wood,wood,wood,wood,wood],
  ];

//test objects here

module.exports.enemies ={
  yarth : {
    name : "Yarth",
    hp : 50,
    attack : function(){
      console.log("this is an attack");
    }
  }
}
