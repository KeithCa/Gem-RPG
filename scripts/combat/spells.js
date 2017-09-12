var Spell = require('./spell.js');
//var Firebolt = require('./spells/Fire/firebolt.js');
var requireDir = require('require-dir');
var Fire = requireDir('./spells/Fire');
var spells = {};
spells.firebolt = new Fire.firebolt();
//console.log("In spells file, firebolt created. Firebolt cd is:" + spells["firebolt"].name);

exports.spells = spells;

//make this a class you idiot.
