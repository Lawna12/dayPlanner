//Declaring Variables
let datetime = $("#dateTime"); //This will display the current day and time
let rightNow = moment().format("H"); //This reaches out and gets the current time specifically in hour format, ie: 1pm

setInterval(() => { //"Fat arrow" syntax -- this fx makes sure time moves
    let now = moment(); //Starts the interval when page loads
    let date = now.format("MM/DD/YYYY  hh:mm a"); //Proper format for date, month, day of, hours, and minutes
    datetime.text(date); //Display the current date/time
}, 1000);


$(".saver").click(function () { // Event listener on save button
    $('input[type="text"]').each(function () {
        const id = $(this).attr('id');
        const value = $(this).val();
        localStorage.setItem(id, value);
    });
});

$('input[type="text"]').each(function () {
    const getting = $(this).attr('id');
    const letsGrab = localStorage.getItem(getting);
    document.getElementById(getting).value = letsGrab;
});


// below is the code that will change the color of the block depending on TOD.
colorChecks(9, "#nineAm"); //Calling the colorChecks function and passing the arguments of 9 for 9am and its corresponding id
colorChecks(10, "#tenAm"); 
colorChecks(11, "#elevenAm"); 
colorChecks(12, "#twelvePm"); 
colorChecks(13, "#onePm"); 
colorChecks(14, "#twoPm"); 
colorChecks(15, "#threePm"); 
colorChecks(16, "#fourPm"); 
colorChecks(17, "#fivePm"); 

function colorChecks(time, theId) {
    if (rightNow > time) { //If right now is greater than the hour block a "class" is added of "past"
        $(theId).addClass("past"); // past will turn the block lightBlue
    }
    else if (rightNow < time) { //If right now is less then the hour block a "class" is added of "future"
        $(theId).addClass("future"); //future will turn the block lightseagreen
    }
    else if (rightNow == time) { //If right now is equal to the hour block a "class" is added of "present"
        $(theId).addClass("present"); // present will turn the block white
    }
}