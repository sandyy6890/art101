// Lab 7 - Functions
// Author: Sandy Strishak
// Date: 10.23.2024

//sortUsername - a function that takes user input and sorts the letters of thier name
function sortUserName() {
    var userName = window.prompt("Hi. Please tell me your name so I can fix it!");
    console.log("userName =", userName);
    //split string to array
    var nameArray = userName.split('');
    //sort the array
    var nameArraySort = nameArray.sort();
    console.log("nameArraySort =", nameArraySort);
    //join array back to a string
    var nameSorted = nameArraySort.join('');
    console.log("nameSorted =", nameSorted);
    return nameSorted;
}

//output
document.writeln("Hey, I've fixed your name: ",
    sortUserName(), "</br>");
