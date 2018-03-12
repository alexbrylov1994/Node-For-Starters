// var rect = {
//       perimeter: function(x,y){
//         return (2*(x+y));
//       },

//       area: function(x,y){
//         return (x*y);
//       }
//   };

var rect = require("./recrangle-1");

function solveRect(l, b) {
  console.log("Solving for rectangle with l = " + l + " and b = " + b);

  if (l < 0 || b < 0) {
    console.log("Rectanle dimensions sould more than 0, L: " + l + " B:" + b);
  } else {
    console.log("Perimeter of rectangle (L: " + l + " B: " + b + ") is " + rect.perimeter(l, b));
    console.log("Area of of rectangle (L: " + l + " B: " + b + ") is " + rect.perimeter(l, b));
  }
}