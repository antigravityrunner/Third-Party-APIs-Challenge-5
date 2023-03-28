// Wrap all code that interacts with the DOM in a call to jQuery to ensure that

// the code isn't run until the browser has finished rendering all the elements

// in the html.

$(function () {
  let date = dayjs().format("dddd, MMMM D");
  console.log(date);
  $("#currentDay").text(date);

  let currentHour = dayjs().hour();
  //let currentHour = 13;

  //Loop through all of the hour blocks
  //using 24 hour time for an easier loop
  for (let i = 9; i <= 17; i++) {
    
    //Add class present if the hour block is equal to the current hour
    if (i == currentHour) {
      $("#hour-" + i).addClass("present");
    }

    //Add class past if the hour block is before the current time
    if (i < currentHour) {
      $("#hour-" + i).addClass("past");
    }

    //Add class future if the hour block is after the current time
    if (i > currentHour) {
      $("#hour-" + i).addClass("future");
    }

    //Pull the hour text from local storage
    $("#hour-" + i + " textarea").val(localStorage.getItem("hour-" + i));
  }

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  //Add listener to all buttons
  $(".saveBtn").on("click", function () {
    console.log($(this).parent().attr("id"));
   //Saves to localStroage based on parent id
    localStorage.setItem(
      $(this).parent().attr("id"),
      $(this).siblings(".description").val()
    );
  });

  //localStorage.setItem

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
