var express = require('express');
var router = express.Router();
var lastActions = {};
var map = require('../models/map_handler');
var combat = require('../models/combat_instance');
var Locations = require('../models/location_model');
var lastPos;
var combat_init = false;
var combat_instance;
var onField = {};

//create locations handler. every map should be passed through from there to here. all loaded in the single page location.ejs
router.get('/locations', function(req, res){
	res.render('locations', {
		username : req.user.username
});
var io = req.app.get('socketio');

let socket_id = [];
let users = new Object(); // Store users
io.on('connection', function(socket) {
      socket_id.push(socket.id);
      if (socket_id[0] === socket.id) {
        // remove the connection listener for any subsequent
        // connections with the same ID
        io.removeAllListeners('connection');
      }
  socket.on('disconnect', function() {
    console.log("User has disconnected: " + users[socket.id])
    delete users[socket.id]; // User disconnected, delete from list
  });

  socket.on('add user', function(username) {
    users[socket.id] = username; // Add user to list
    console.log("User has joined: " + username);
    socket.emit('startMap',{username:users[socket.id]});
  });
  socket.on('getMap', function(){
    console.log("in getMap for" + users[socket.id]);

		Locations.getPlayerByUsername(users[socket.id] , function(err, player){
			var map_location = player.loc;
			var map_area = player.area;

			map[map_location][map_area]["actual"][map[map_location][map_area]["player_loc_y"]][map[map_location][map_area]["player_loc_x"]] = player;
			//sets players starting location on the map
			if(map[map_location][map_area]["map_type"] == "Combat"){
				if(combat_init == false){
					for (var key in map[map_location][map_area]["Enemies"]){ //storing each object on field in array.
						if (map[map_location][map_area]["Enemies"].hasOwnProperty(key)) {
    					onField[map[map_location][map_area]["Enemies"][key].name] = map[map_location][map_area]["Enemies"][key];
  						}
					}
						onField[username] =player;
						console.log(onField)
						combat_instance = new combat(onField);
					}// end combat initilization
				}


	 		socket.emit('heresTheMap', {loc_info: map[map_location][map_area]});
	 });
	});//end getMap

	socket.on('move', function(data) {
		if(data.socket_id == socket.id){
	 lastPos = data.movePos; //need to figure out a way to save this just for the asking client
	 console.log(lastPos);
 }
});//end move

});//end connection

});//end get




module.exports = router;
