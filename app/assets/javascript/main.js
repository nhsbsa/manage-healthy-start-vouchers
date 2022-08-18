// ES6 or Vanilla JavaScript
$(".nhsuk-tabs__list-item a").on("click", function () {
    $(".nhsuk-tabs__list-item").removeClass("nhsuk-tabs__list-item--selected");
    $(this).parent(".nhsuk-tabs__list-item").addClass("nhsuk-tabs__list-item--selected");
    var selectedTab = $(this).attr('href');
    console.log(selectedTab);
    $(".nhsuk-tabs__panel").addClass("nhsuk-tabs__panel--hidden");
    $(selectedTab).removeClass("nhsuk-tabs__panel--hidden");
  });
  
  if (window.location.href.indexOf('claim') > 0 || window.location.href.indexOf('add-success') > 0 || window.location.href.indexOf('edit-success') > 0 || window.location.href.indexOf('remove-success') > 0) {
    $(".nhsuk-tabs__list-item").removeClass("nhsuk-tabs__list-item--selected");
    $("#claim-tab").addClass("nhsuk-tabs__list-item--selected");
    $(".nhsuk-tabs__panel").addClass("nhsuk-tabs__panel--hidden");
    $("#claim").removeClass("nhsuk-tabs__panel--hidden");
  }
  
  if (window.location.href.indexOf('eligibility') > 0 || window.location.href.indexOf('add-success') > 0 || window.location.href.indexOf('edit-success') > 0 || window.location.href.indexOf('remove-success') > 0) {
      $(".nhsuk-tabs__list-item").removeClass("nhsuk-tabs__list-item--selected");
      $("#eligibility-tab").addClass("nhsuk-tabs__list-item--selected");
      $(".nhsuk-tabs__panel").addClass("nhsuk-tabs__panel--hidden");
      $("#eligibility").removeClass("nhsuk-tabs__panel--hidden");
    }
  
    if (window.location.href.indexOf('payments') > 0 || window.location.href.indexOf('add-success') > 0 || window.location.href.indexOf('edit-success') > 0 || window.location.href.indexOf('remove-success') > 0) {
      $(".nhsuk-tabs__list-item").removeClass("nhsuk-tabs__list-item--selected");
      $("#payments-tab").addClass("nhsuk-tabs__list-item--selected");
      $(".nhsuk-tabs__panel").addClass("nhsuk-tabs__panel--hidden");
      $("#payments").removeClass("nhsuk-tabs__panel--hidden");
    }
  
    if (window.location.href.indexOf('timeline') > 0 || window.location.href.indexOf('add-success') > 0 || window.location.href.indexOf('edit-success') > 0 || window.location.href.indexOf('remove-success') > 0) {
      $(".nhsuk-tabs__list-item").removeClass("nhsuk-tabs__list-item--selected");
      $("#timeline-tab").addClass("nhsuk-tabs__list-item--selected");
      $(".nhsuk-tabs__panel").addClass("nhsuk-tabs__panel--hidden");
      $("#timeline").removeClass("nhsuk-tabs__panel--hidden");
    }