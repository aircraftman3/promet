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