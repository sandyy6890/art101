// Lab 6 - Arrays and Objects
// Author: Sandy Strishak
// Date: 10.23.2024

// myTransport array
myTransport = ["Blue Beamer", "walk", "bus"];

// Object For myMainRide
myMainRide = {
      make: "BMW",
      model: "X1",
      color: "Blue",
      year: "2014",
      age: function() {
          return 2024 -this.year;
      }
    }
//output
document.writeln("Kinds of transportation I use: ", myTransport, "<br>");
document.writeln("My Main Ride: <pre>", 
  JSON.stringify(myMainRide, null, '\t'), "</pre>");

