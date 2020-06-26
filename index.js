const express = require('express');

const appMiddleware = require('./middleware');
const routes = require('./api');

const app = express();
const PORT = process.env.PORT || 8080;

appMiddleware(app);
routes(app);

app.get('/', (req,res) => {
	return res.json({message:'connected'})
})

app.listen(PORT, () => {
	console.log(`app is listening on port ${PORT}`)
});