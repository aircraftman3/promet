


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


