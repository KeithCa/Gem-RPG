//another way to use spells this could give us more control at the cost of time and effort.
// https://googlechrome.github.io/samples/classes-es6/
//use of this file is not implemented yet
const Spell = require('../spell.js');

class Firebolt extends Spell{
  constructor(){
     super();
     this.name = "Firebolt"
     this.type = "Fire Damage";
     this.min_dmg = 2;
     this.max_dmg = 10;
     this.spell_cd = 15;
  }

  useSpell(player_hp){ //example function - we don't have to do it this way though
    player_hp = player_hp - min_dmg;
    return player_hp;
  }

}

 module.exports = Firebolt;
