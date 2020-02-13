$(".tender-details-tab-header-item").click(function() {
  $(".tender-details-tab-header-item").removeClass("active");
  $(".tab-content").removeClass("tab-active");
  if (!$(".tender-details-tab-header-item").hasClass("active")) {
    $(this).addClass("active");
    // Display the selected tab content
    $(`.${$(this).attr("data-tab")}`).addClass("tab-active");
  } else {
    $(".tender-details-tab-header-item").removeClass("active");
  }
});

$(".mob-menu-icon").click(function() {
  $(".mob-menu ul").css({
    width: "265px",
    display: "block"
  });
  $(".mob-menu-bg").css("display", "block");
});

$(".mob-menu-close, .mob-menu-bg").click(function() {
  $(".mob-menu ul").css({
    width: "0%",
    display: "none"
  });
  $(".mob-menu-bg").css("display", "none");
});

// Toggle switch function when span is clicked
$(".toggle-switch-name").click(function() {
  $("#toggleSwitch").prop("checked", false);
});
$(".toggle-switch-code").click(() => {
  $("#toggleSwitch").prop("checked", true);
});
