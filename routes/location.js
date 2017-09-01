var express = require('express');
var router = express.Router();
var colors = {};
var lastActions = {};
var map = require('../models/map2test');
var Locations = require('../models/location_model');
var lastPos;

//create locations handler. every map should be passed through from there to here. all loaded in the single page location.ejs
router.get('/locations', function(req, res){
	res.render('locations', {
		mapArray : map.training_area
});
let socket_id = [];
//map.enemies["Yarth"].attack();

console.log(map.training_area[0][0])

//for (var key in map.enemies) {
//  if (map.enemies.hasOwnProperty(key)) {
//    map.enemies[key].attack();
//  }
//}



var io = req.app.get('socketio');
io.sockets.on('connection', function (socket) {
	socket_id.push(socket.id);
	if (socket_id[0] === socket.id) {
		// remove the connection listener for any subsequent
		// connections with the same ID
		io.removeAllListeners('connection');
	}
	console.log(socket.id);
	socket.on('move', function(data) {
		if(data.socket_id == socket.id){
	 console.log(lastPos);
	 lastPos = data.movePos; //need to figure out a way to save this just for the asking client
	 console.log(lastPos);
 }
});
});

});




module.exports = router;
