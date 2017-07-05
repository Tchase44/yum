var mongoose = require('mongoose');
var Schema = require("./db/schema.js");
let Restaurant = Schema.Restaurant
let MenuItem = Schema.MenuItem

let restaurantController = {
	findByName(input){
		Restaurant.findOne({name: input}, (error,locale)=>{
			console.log(locale)
		})
	}
	findByZip(input){
		Restaurant.find({'address.zip': input},(error,locale)=>{
			console.log(locale)
		})
	}
}