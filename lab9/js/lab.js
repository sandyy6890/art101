//lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page
//Requirements: jQuery must be loaded for this script to work.
//Author: Sandy Strishak
//Date: 11/7/2024

// add button to challenge section
$("#challenge").append("<button id='button-challenge'>Here</button>");

// add button to challenge section
$("#problems").append("<button id='button-problems'>Here</button>");

// add button to challenge section
$("#reflection").append("<button id='button-reflection'>Here</button>");

// add button to challenge section
$("#results").append("<button id='button-results'>Here</button>");

// add a click listener to the challenge button
$("#button-challenge").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#challenge").toggleClass("special");
});

// add a click listener to the problems button
$("#button-problems").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#problems").toggleClass("special");
});

// add a click listener to the reflection button
$("#button-reflection").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#reflection").toggleClass("special");
});

// add a click listener to the results button
$("#button-results").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#results").toggleClass("special");
});