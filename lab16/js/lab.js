// index.js - Lab 16: JSON and APIs. This simple JavaScript/jQuery script dynamically fetches XKCD comic data based on user input.
// Author: Penetha Jayakumar, Sandy Strishak
// Date: 2Dec2024

$(document).ready(function () {
    // Handle 'specific' button click
    $('#specific').click(function () {
        // Enable the comic ID input and fetch button
        $('#comicID').prop('disabled', false);
        $('#fetch').prop('disabled', false);
        $('#manual').html(`
            <label for="comic">Enter Comic number:</label>
            <input type="number" id="comicID" placeholder="Example : 10" min="1" max="3019" required>
            <button id="fetch">Fetch</button>`);

        // Disable the 'random' button
        $('#random').prop('disabled', true);

        // Clear the output section
        clearOutput();
    });

    // Handle 'random' button click
    $('#random').click(function () {
        // Disable the comic ID input and fetch button
        $('#comicID').prop('disabled', true);
        $('#fetch').prop('disabled', true);

        // Disable the 'specific' button
        $('#specific').prop('disabled', true);

        // Clear the output section
        clearOutput();

        // Fetch a random XKCD comic
        fetchRandomComic();
    });

    // Handle 'fetch' button click for specific comic
    $(document).on('click', '#fetch', function () {
        const comicID = $('#comicID').val();
        // Validate input to ensure it is a number between 1 and 1025 and not empty
        if (!comicID || isNaN(comicID)) {
            console.error("Please enter a valid Comic ID.");
            $("#output").text("Invalid input! Please enter a numeric PokÃ©mon ID.");
            return;
        }
        if (comicID <1 || comicID >3019) {
            console.error("Please enter a valid Comic ID between 1 and 3019.");
            $("#output").text("Please enter a number between 1 and 3019 for comic ID.");
            return;
        }
        if (comicID) {
            // Clear the output section
            clearOutput();

            // Fetch the specific comic
            fetchSpecificComic(comicID);
        } else {
            alert('Please enter a valid comic ID.');
        }
    });

    // Reload button functionality
    $(document).on('click', '#reload', function () {
        location.reload(); // Reload the page to reset everything
    });

    /*Function to fetch a specific XKCD comic by its ID. */
    function fetchSpecificComic(comicID) {
        const comicURL = `https://xkcd.com/${comicID}/info.0.json`;
        $.ajax({
            url: `https://api.allorigins.win/get?url=${comicURL}`,
            method: 'GET',
            dataType: 'JSON',
            success: function (response) {
                // The actual comic data is inside response.contents
                const comicObj = JSON.parse(response.contents);

                // Log the response for debugging
                console.log("Success!!", comicObj);

                // Update the section title dynamically using the comic title
                $('#header > h3').text("XKCD Comic Generated is '"+ comicObj.title +"'");

                // Display the comic in the output section
                $('#output').html(`
                    <h5>${comicObj.title}</h5>
                    <img id="comicimage" src="${comicObj.img}" alt="${comicObj.alt}" title="${comicObj.alt}">
                    <p>${comicObj.alt}</p>
                    <button id="reload">Reload page to enable the disabled button</button>
                `);
            },
            error: function (textStatus, errorThrown) {
                console.log("Error:", textStatus, errorThrown); // Log error details
                $('#output').html(`<p>Error fetching the comic. Please check the comic ID.</p>
                <button id="reload">Reload Page</button>`);
            },
        });
}

    /* Function to fetch a random XKCD comic. */
    function fetchRandomComic() {
        const maxComics = 3019; // Adjust this number to the latest XKCD comic count
        const randomID = Math.floor(Math.random() * maxComics) + 1;
        fetchSpecificComic(randomID);
    }

    /*Function to clear the output section. */
    function clearOutput() {
        $('#output').empty(); // Clear the HTML content inside the output div
    }
});
  
  

lab.js
