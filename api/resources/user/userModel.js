'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
	_id: mongoose.Types.ObjectId,
	email: String,
	password: String
	// signupDate: String,
	// zones: [
	// 	{
	// 		zoneId: mongoose.Types.ObjectId,
	// 		imageArray:[
	// 			{
	// 				name: String,
	// 				url: String
	// 			}
	// 		]
	// 	}
	// ],
});
// userSchema.methods.serialize = () => {
// 	return {
// 		username: this.username || "",
// 		id: this.id || ""

// 	};
// };
// userSchema.statics.hashPassword = (password) => {
// 	bcrypt.genSalt(saltRounds, function(err, salt) {
//     bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
//         // Store hash in your password DB.
//         return hash;
//     });
// 	});
// };


const User = mongoose.model('User', userSchema);

module.exports = { User };