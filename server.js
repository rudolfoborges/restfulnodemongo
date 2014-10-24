var express = require('express'),
	bodyParser = require('body-parser'),
	restful = require('node-restful'),
	mongoose = restful.mongoose;


var app = express();

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/restful');

var ProductSchema = mongoose.Schema({
	name: String,
	price: Number
});

var Products = restful.model('products', ProductSchema);
Products.methods(['get', 'post', 'put', 'delete']);
Products.register(app, '/api/products');


app.listen(3000);
console.log('Server running at port 3000');