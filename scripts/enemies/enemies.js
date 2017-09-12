var Enemy = require('./baseenemy.js');
var requireDir = require('require-dir');
var Home = requireDir('./home');

var enemies = {};
enemies.yarth = new Home.yarth();
//console.log(enemies.yarth.name);

exports.enemy = enemies;
