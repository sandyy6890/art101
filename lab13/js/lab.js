//lab.js - This simple JavaScript/jQuery script helps create the game FizzBuzz using looping functions.
//Requirements: jQuery must be loaded for this script to work.
//Author: Sandy Strishak, Panetha Jayakumar
//Date: 11/19/2024

function fizzBuzz(loopCount, factorList, factorStr) {
    let outputStr = [];
    for (let i = 1; i <= loopCount; i++) {
      let result = ''; // Reset for each iteration
      for (let j = 0; j < factorList.length; j++) {
        if (i % factorList[j] === 0) {
          result += factorStr[j];
        }
      }
      outputStr.push(`${i} - ${result || i}!`); // Use the number if no match
    }
    return outputStr.join('<br>');
  }
  
  function addFactor(factor) {
    let factorList = [];
    let factorStr = [];
    const outputStringList = ["Fizz", "Buzz", "Boom", "Bang", "Blop", "Duhh", "Tudum", "Pika", "Pom", "Ping"];
    
    $("#inputsFactor").empty(); // Clear any existing inputs
    for (let i = 0; i < factor; i++) {
      $("#inputsFactor").append(
        `<p>Enter factor ${i+1} for ${outputStringList[i]}.</p>`,`<input type="number" id="f${i}" placeholder="Enter Factor ${i+1}" class="factorid" maxlength="2" min="0" <br>`
      );
      factorList.push(`#f${i}`);
      factorStr.push(outputStringList[i]);
      }
      $("#inputsFactor").append('<br><button id="run">Run</button>'); // Add Run button
    return [factorList, factorStr];
  }
  
  $(document).on("change", "#factorCount", function() {
    let value = parseInt($(this).val());
    if (value > 10) {
      $(this).val(10); // Reset to 10 if value is greater than 10
      alert("Please enter a number less than or equal to 10.");
    }
  });
  
  
  // Click listener for submit button
  $("#submit").click(function() {
    const factor = ($("#factorCount").val());
    if (isNaN(factor) || factor <= 0) {
      alert("Please enter a valid number of factors.");
      return;
    }
    [factorsList, factorsStr] = addFactor(factor); // Generate inputs dynamically
  });
  
  // Delegated click listener for dynamically added Run button
  $(document).on("click", "#run", function() {
    const loopCount = parseInt($("#loopCount").val());
    if (isNaN(loopCount) || loopCount <= 0) {
      alert("Please enter a valid loop count.");
      return;
    }
  
    // Gather factor values from inputs
    let factorValues = [];
    for (let selector of factorsList) {
      const value = parseInt($(selector).val());
      if (!isNaN(value)) {
        factorValues.push(value);
      }
    }
  
    if (factorValues.length === 0) {
      alert("Please enter valid factor values.");
      return;
    }
  
    const fizzBuzzOutput = fizzBuzz(loopCount, factorValues, factorsStr); // Perform fizzBuzz
  
    $("#output").html(`<div class="text"><h3>FizzBuzz Output is here!!!!</h3><p>${fizzBuzzOutput}</p></div>`); // Display output
  
  });
  
  $("#output").css('column-count', 3)
  $("#inputsFactor").css('column-count', 2)