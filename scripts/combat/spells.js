var Spell = require('./spell.js');
var Firebolt = require('./spells/firebolt.js');
var spells = {};
spells.firebolt = new Firebolt();
console.log("In spells file, firebolt created. Firebolt cd is:" + spells["firebolt"].name);

exports.spells = spells;
