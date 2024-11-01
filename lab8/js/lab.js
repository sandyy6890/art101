// index.js - Lab 8: Anon Functions and Callbacks
// Author: Penetha Jayakumar, Sandy Strishak
// Date: 28Oct2024

//Functiom to double any given number
function double(x){
    var doubled = x*2;
    return doubled;
}

//To test function double
console.log(double(5))
console.log(double(8))

//Declaring an array of numbers
list = [12,33,44,55,66,88,90,100,40,20,18,62,120,25];
console.log(list)

//Declaring a variable to store the results of the double function performed using map on the list
var results = list.map(double);
console.log("Double operation results ", results);

//Adding a new operation to find square root using map method on the list
var new_results = list.map(function(x){
    var sqrt = (x**0.5).toFixed(2);
    return sqrt;
})
console.log("Square root operation results = ", new_results);

var mapResults = ["Double operation results: ","<br>","<br>", results,"<br>","<br>","<br>", "Square operation results: ","<br>","<br>", new_results];
console.log(mapResults);

//To display output in webpage.
// Use jQuery to select the element by its ID and set the HTML content
$("#output").html(mapResults);