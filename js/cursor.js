$(document).mousemove(function (e) {
  $(".small-circle").css({
    left: e.pageX,
    top: e.pageY,
  });

  setTimeout(function () {
    $(".big-circle").css({
      left: e.pageX,
      top: e.pageY,
    });
  }, 50);
});


