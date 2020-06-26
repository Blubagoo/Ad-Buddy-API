'use strict';

const userRoutes = require('./resources/user/userRoutes');
const analyticRoutes = require('./resources/analytic/analyticRoutes');
const imageBucketRoutes = require('./resources/imageBucket/imageBucketRoutes');



module.exports = function(app) {
	app.use('/api/user', userRoutes);
	app.use('/api/analytic', analyticRoutes);
	app.use('/api/imageBucket', imageBucketRoutes);
}