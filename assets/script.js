// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage? **
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time? **
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this? **
  //
  // TODO: Add code to display the current date in the header of the page. **



// this adds functionality to any of the save buttons when they are  clicked, saves the hour and text value to local storage
$(function () {
  $(".saveBtn").click(function(){
    var value = $(this).siblings(".description").val()
    var time = $(this).parent().attr("id")
    localStorage.setItem(time,value) 

  })
  // displaying current date on header of page 
  $("#currentDay").text(dayjs().format("dddd, MMMM D YYYY"));
  // function that checks time and compares to timeblocks on html and udpates the CSS accordingly (changes color if hour is in past or in future of current time)
  $(".time-block").each(function(){
    var currenthour = dayjs().hour()
    var timeblock = parseInt($(this).attr("id").split("-")[1])
    if (timeblock < currenthour){
      $(this).addClass("past")
    } else if (timeblock === currenthour) {
      $(this).addClass("present")
    } else {
      $(this).addClass("future")
    } 

  })
  //retreiving saved value from local storage for each hour upon launch
  $("#hour-9 .description").val(localStorage.getItem("hour-9"))
  $("#hour-10 .description").val(localStorage.getItem("hour-10"))
  $("#hour-11 .description").val(localStorage.getItem("hour-11"))
  $("#hour-12 .description").val(localStorage.getItem("hour-12"))
  $("#hour-13.description").val(localStorage.getItem("hour-13"))
  $("#hour-14 .description").val(localStorage.getItem("hour-14"))
  $("#hour-15 .description").val(localStorage.getItem("hour-15"))
  $("#hour-16 .description").val(localStorage.getItem("hour-16"))
  $("#hour-17 .description").val(localStorage.getItem("hour-17"))

});
