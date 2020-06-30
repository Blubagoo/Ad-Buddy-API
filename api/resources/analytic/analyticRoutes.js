'use strict';

const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
	return res.json({message: 'This feature is not yet released!'});
});

module.exports = router;