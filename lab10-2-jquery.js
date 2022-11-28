//LAB 10 - 2 INVENTORY PAGE
jQuery(window).on("load", function () {
  //hide text on load
  $(".desc").hide();

  //row red on mouseenter and mouseleave

  $("tr").hover(
    function () {
      $(this).css("background", "red");
    },
    function () {
      $(this).css("background", "white");
    }
  );

  //toggle show hide the specific row
  $("tr").on("click", function () {
    $(".desc").hide();
    $(this).find("td.desc").toggle();
  });
});
