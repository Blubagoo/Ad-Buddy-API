'use strict';

const express = require('express');
const router = express.Router();
const {getAdvertisement, addAdvertisement} = require('./imageBucketCtrl')

router.get('/', (req, res) => {
	return getAdvertisement(req,res);
});
router.post('/newAd', (req, res) => {
	return addAdvertisement(req, res);
});

module.exports = router;