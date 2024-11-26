//lab.js - This simple JavaScript/jQuery script is from the yes/no API, its purpose is to test end results
//Requirements: jQuery must be loaded for this script to work.
//Author: Sandy Strishak, Panetha Jayakumar
//Date: 11/25/2024

//let data = {
//"answer": "no",
//"forced": false,
//"image": "https://yesno.wtf/assets/no/24-159febcfd655625c38c147b65e5be565.gif"
//}
$("#activate").append("<button id='activate'>Here</button>");
$("#activate").click(function(){
$.ajax ({
    // The URL for the request
    url: "https://yesno.wtf/api",
    // The data to send (will be converted to a query string)
    data: { id: 123},
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType : "json", 
  })
    // Add eventlistener for the api function
    .done(function ( data ) {
    console. log (data);
      $("#output").append("<h1>" + data.answer);
      $("#output").append("<img src='" + data. image + "' >")
  })
  // If the request fails
  .fail(function (xhr, status, errorThrown)
        {
     console. log(errorThrown + " Status:" + status );
  });

  });
  JSON.stringify(data) 
