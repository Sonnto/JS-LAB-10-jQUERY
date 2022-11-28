//LAB 10 - 1 FAQ PAGE
jQuery(window).on("load", function () {
  //hides the p
  $("p").hide();

  //toggle show-hide when clicking the title

  $("h2").on("click", function () {
    $(this).next("p").slideToggle(3000);
  });

  //mouseover and mouseleave change or hover

  $("p").hover(
    function () {
      $(this).addClass("textHovered");
    },
    function () {
      $(this).removeClass("textHovered");
    }
  );
});
