var argv = require('yargs')
    .usage('Usage: node $0  n --l=[num] --b=[num]')
    .demand(['l','b'])
    .argv;


var rect = require('./rectangle-2');

function solveRect(l, b) {
    console.log("Solving for rectangle with l = " + l + " and b = " + b);
  
    rect(l,b, function(err, rectangle) {
        if (err) {
            console.log(err);
        }
        else{
            console.log("Perimeter of rectangle (L: " + l + " B: " + b + ") is " + rectangle.perimeter());
            console.log("Area of of rectangle (L: " + l + " B: " + b + ") is " + rectangle.area());
        }
    });

  }

//   solveRect(2,2);
   solveRect(argv.l,argv.b);