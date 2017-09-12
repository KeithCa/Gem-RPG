const Enemy = require('../baseenemy.js');

class Yarth extends Enemy{
  constructor(){
     super();
     this.name = "Yarth"
     //stats
     this.hp = 100;
     this.mp = 20;
     this.str = 12;
     this.int = 8;
     this.spd = 5;
     this.agi = 7;
     this.dex = 5;
     this.wis = 7;
  }

attack(){
  console.log("this is an attack");
}

}

 module.exports = Yarth;
