var mongoose = require('mongoose');
var assert = require('assert');

var Dishes = require('./dishes-1');

var url = 'mongodb://localhost:27017/conFusion';
mongoose.connect(url);
var db = mongoose.connection;
db.on('error', console.error.bind(console,'connection error:'));

db.once('open', function(){
    console.log("Connected correctly to server");

    var newDish = Dishes({
        name: 'Uthapizza',
        description: 'test'
    });

    newDish.save(function(err){
        if (err) throw err;

        console.log('Dish Created');
        Dishes.find({}, function(err, dishes){
            if (err) throw err;
            console.log(dishes);
        });
    });
});