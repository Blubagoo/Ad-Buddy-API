'use strict';

const getAdvertisement = (req, res) => {
	return res.json({message: 'control page get route working'})
}

const addAdvertisement = (req, res) => {
	return res.json({message: 'control page post route working'});
}

module.exports = {getAdvertisement, addAdvertisement}