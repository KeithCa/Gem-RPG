var mongoose = require('mongoose');
var User = require('../models/user');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

// players Schema
var PlSchema = mongoose.Schema({

  user_id: {
    type: ObjectId
        },
	pl_name: {
		type: String
	},
	loc: {
		type: String

	},
  pl_free_stats: {
		type: Number
	},
	pl_hp: {
		type: Number
	},
	pl_exp: {
		type: Number

	},
  pl_gold: {
		type: Number
	},
  pl_class: {
		type: Number
	},
  equipment: {
		r_hand_id : Number,
    l_hand_id : Number,
    chest_id : Number,
    boots_id : Number,
   helm_id : Number
 },
 inventory: [{
   item_name: String,
   item_type: String,
 }
 ]
});

var Players = module.exports = mongoose.model('Players', PlSchema);


module.exports.getPlayerByUsername = function(username, callback){
  console.log("in function playerby"+username);
	var query = {pl_name: username};
	Players.findOne(query, callback);
};
