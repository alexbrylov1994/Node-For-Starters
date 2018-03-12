var mongoose = require('mongoose');
var assert = require('assert');

var Dishes = require('./dishes-3');

var url = 'mongodb://localhost:27017/conFusion';
mongoose.connect(url);
var db = mongoose.connection;
db.on('error', console.error.bind(console,'connection error:'));

db.once('open', function(){
    console.log("Connected correctly to server");

    Dishes.create({
        name: 'Uthapizzaa',
        description: 'Test',

        comments: [{
            rating: 3, 
            comment: 'this is cooool',
            author: 'Math Daemon'
        }]
    },function(err, dish){
        if(err) throw err;
        console.log("dish created!");
        console.log(dish);

        var id = dish._id;

        setTimeout(function(){
            Dishes.findByIdAndUpdate(id,{
                $set: {
                    description: "Updated Tes"
                }
            }, {
                new: true
            })
            .exec(function(err,dish){
                if (err) throw err;
                console.log('Updated Dish');
                console.log(dish);
                
                dish.comments.push({
                    rating: 5,
                    comment: 'Im getting tipsy',
                    author: 'Leo De Caprio'
                });

                dish.save(function(err,dish){
                    if (err) throw err;
                    console.log("Updated Comments");
                    console.log(dish);
                

                db.collection('dishes').drop(function(){
                    console.log('collection dropped');
                    db.close();
            });
        });
            });
        },3000);
    });

});