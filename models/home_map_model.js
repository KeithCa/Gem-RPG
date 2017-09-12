module.exports.training_area = [
      [0, 0, 0, 0 ,0 ,0 ,0 ,0 ,0],
      [0, 0, 0, 0 ,0 ,0 ,0 ,0 ,0],
      [0, 0, 0, 0 ,0 ,0 ,0 ,0 ,0],
      [0, 0, 0, 0 ,0 ,0 ,0 ,0 ,0],
      [0, 0, 0, 0 ,0 ,0 ,0 ,0 ,0],
      [0, 0, 0, 0 ,0 ,0 ,0 ,0 ,0],
      [0, 0, 0, 0 ,0 ,0 ,0 ,0 ,0],
      [0, 0, 0, 0 ,0 ,0 ,0 ,0 ,0],
      [0, 0, 0, 0 ,0 ,0 ,0 ,0 ,0]
  ];

  //0 grass 1 nothing 2 soil 3 chest 4 tree 5 rock 6 building 7 enemy 8 npc

module.exports.training_area_factual = [
        [0, 0, 0, 0 ,0 ,0 ,0 ,0 ,0],
        [0, 0, 0, 0 ,0 ,0 ,0 ,0 ,0],
        [0, 0, 0, 0 ,0 ,0 ,0 ,0 ,0],
        [0, 0, 0, 0 ,0 ,0 ,0 ,0 ,0],
        [0, 0, 0, 0 ,0 ,0 ,0 ,0 ,0],
        [0, 0, 0, 0 ,0 ,0 ,0 ,0 ,0],
        [0, 0, 0, 0 ,0 ,0 ,0 ,0 ,0],
        [0, 0, 0, 0 ,0 ,0 ,0 ,0 ,0],
        [0, 0, 0, 0 ,0 ,0 ,0 ,0 ,0]
    ];

module.exports.enemies ={
  Yarth : {
    name : "Yarth",
    hp : 50,
    attack : function(){
      console.log("this is an attack y");
    }
  },
  Harua : {
    name : "Harua",
    hp : 50,
    attack : function(){
      console.log("this is an attack h");
    }
  }
}

//test objects here
/*
module.exports.enemies ={
  yarth : {
    name : "Yarth",
    hp : 50,
    attack : function(){
      console.log("this is an attack");
    }
  }
}*/
