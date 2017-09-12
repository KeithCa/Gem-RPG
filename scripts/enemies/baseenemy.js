class Enemy{

  constructor(name, hp, mp, str, int, spd, agi, dex, wis){
     this.name = name;
     this.objtype = "Enemy";
     //stats
     this.hp = hp;
     this.mp = mp;
     this.str = str;
     this.int = int;
     this.spd = spd;
     this.agi = agi;
     this.dex = dex;
     this.wis = wis;
     this.loc_x = 0;
     this.loc_y = 0;
  }
}

module.exports = Enemy;
