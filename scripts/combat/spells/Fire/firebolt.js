//another way to use spells this could give us more control at the cost of time and effort.
// https://googlechrome.github.io/samples/classes-es6/
//use of this file is not implemented yet
const Spell = require('../../spell.js');

class Firebolt extends Spell{
  constructor(){
     super();
     this.name = "Firebolt"
     this.type = "Fire Damage";
     this.min_dmg = 2;
     this.max_dmg = 10;
     this.spell_cd = 1;
  }

  useSpell(target){ //example function - we don't have to do it this way though
    target.hp = target.hp - min_dmg;
  }

}

 module.exports = Firebolt;
