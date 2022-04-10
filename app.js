$(document).ready(function () {
  $(window).scroll(onScroll);

  $(".nav-item a").on("click", function () {
    $(".nav-item a").removeClass("active");
    $(this).addClass("active");
  });
});

// Use Your Class or ID For Selection
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
