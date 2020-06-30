const express = require('express');
const router = express.Router();

const { getUser, newUser } =  require('./userCtrl');

router.get('/:userID', (req,res) => getUser(req,res,req.params.userID));
router.post('/newUser', (req,res) => {
	console.log('new user route');
	return newUser(req,res);
})

module.exports = router;