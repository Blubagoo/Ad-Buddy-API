'use strict';

const mongoose = require('mongoose');
const {User} = require('./userModel');

const getUser = (req, res,user) => {
	console.log('get user')
	return User.find({email: user})
		.then(user => {
			return res.status(200).json({user})
		})
}
const helperJSON = (code, type, reason, location) => {
	return ({
		code,
		type,
		reason,
		location
	})
}
const newUser = (req, res) => {
	//check for all reuuired fields
	console.log('start of new user')
	const requiredFields = ['email', 'password'];
	const missingFields = requiredFields.find(field => !(field in req.body));
	if (missingFields) {
		return res.status(422).json(
			helperJSON(422, 'Validation Error', 'You are missing a field', missingFields)
		);
	}
	const nonStringFields = requiredFields.find(field => field in req.body && typeof req.body[field] !== 'string');
	if (nonStringFields) {
		return res.status(422).json(
			helperJSON(422, 'Validation Error', 'Expected the field to be a String', nonStringFields)
		);
	}
	const nonWhiteSpace = requiredFields.find(field => req.body[field].trim() !== req.body[field]);
	if (nonWhiteSpace) {
		return res.status(422).json(
			helperJSON(422, 'Validation Error', 'Cannot contain whitespace at end or beginning of string', nonWhiteSpace)
		)
	}
	const fieldCriteria = {
		password: {
			min: 8,
			max: 72
		},
	}
	const incorrectFormat = requiredFields.find(
		field => field in req.body && req.body.password < fieldCriteria.password.min || req.body.password >  fieldCriteria.password.max
	);
	if (incorrectFormat) {
		return res.status(422).json(
			helperJSON(422, 'Validation Error', 'Password must be between 8 - 72 characters', 'password')
		)
	}
	let dupes = [];

	const duplicateEmail =  User.find({email: req.body.email})
		.then((users) => {
			console.log("users", users);
			dupes = users;
		})
		.catch((err) => {
			return console.log('there was an error when retrieving a dupicate')
		});
	if(dupes > 0) {
		console.log('dupes')
		return res.status(422).json(
			helperJSON(422, 'Validation Error', 'Email is already registerd', 'email')
		);
	}
	let obj = {
		_id: mongoose.Types.ObjectId(),
		email: req.body.email,
		password: req.body.password
	}
	let newProject = new User(obj);
	return newProject.save((err,edu) =>{
		if(err) {
			res.status(400).send({
				message: `Fail on new project ${err}`
			})
		}
		else {
			res.status(200).json({
				message: "Success on creating a new User"
			});
		}
	})
	
}

module.exports = {getUser, newUser}