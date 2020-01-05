
// Variables created:
//     -datetime is pulled from the HTML document, but created from the setInterval
//     funtcion below that pulls date and time from the local computer.
//     -moment is a function in Javascript that lets you Parse, validate, 
//     manipulate, and display dates and times in JavaScript.  
let datetime = $("#dateTime"); 
let rightNow = moment().format("H");// This moment as a specific hour 

setInterval(() => { //setInterval can be used to automate a task using a regular timed based trigger.
    let now = moment();//pulling in current date
    let date = now.format("MM/DD/YYYY  hh:mm a");// format as we need the date and time
    datetime.text(date); //This calls the function to HTML
}, 1000);


$(".saver").click(function () {//event listener that saves the input to local storgage
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


//Set up by unit of time, and id from the document. This function checks
//the hour associated with the dayplanner block by id, against the 
//value associated by retriving "moment" in the rightNow variable.
//Then sets the color in each block according to past, present, and future
//as styled in style.css.
colorChecks(9, "#nineAm"); 
colorChecks(10, "#tenAm"); 
colorChecks(11, "#elevenAm"); 
colorChecks(12, "#twelvePm"); 
colorChecks(13, "#onePm"); 
colorChecks(14, "#twoPm"); 
colorChecks(15, "#threePm"); 
colorChecks(16, "#fourPm"); 
colorChecks(17, "#fivePm"); 

function colorChecks(time, theId) {
    if (rightNow > time) { //if moment in hours is greater than time the color is light blue
        $(theId).addClass("past"); 
    }
    else if (rightNow < time) { //if moment in hours is less than time the color shows palegreen
        $(theId).addClass("future"); 
    }
    else if (rightNow == time) { //if moment in hours is equal to time the color shows light salmon.
        $(theId).addClass("present"); 
    }
}