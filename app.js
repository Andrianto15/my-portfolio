function onScroll(event) {
  var scrollPos = $(document).scrollTop() + 150;
  $("#navbarNav a").each(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
      $("#navbarNav ul li a").removeClass("active");
      currLink.addClass("active");
    } else {
      currLink.removeClass("active");
    }
  });
}

// // smooth scroll
// $("a.smooth-goto").click(function (event) {
//   event.preventDefault();
//   $("html, body").animate(
//     {
//       scrollTop: $($(this).attr("href")).offset().top,
//     },
//     500
//   );
// });
