


$(".dropdown-toggle").on("mouseenter", function () {
  // make sure it is not shown:
  if (!$(this).parent().hasClass("show")) {
    $(this).click();
  }
});
$(".nav-item, .dropdown").on("mouseleave", function () {
  // make sure it is shown:
  if ($(this).hasClass("show")) {
    $(this).children('.dropdown-toggle').first().click();
  }
});


/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}


$(window).scroll(function() {
  if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
    $('#return-to-top').fadeIn(200);    // Fade in the arrow
  } else {
    $('#return-to-top').fadeOut(200);   // Else fade out the arrow
  }
});
$('#return-to-top').click(function() {      // When arrow is clicked
  $('body,html').animate({
    scrollTop : 0                       // Scroll to top of body
  }, 500);
});