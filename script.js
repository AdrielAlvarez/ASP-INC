$(document).ready(function() {
    $('[data-toggle=offcanvas]').click(function() {
      $('.row-offcanvas').toggleClass('active');
    });

    // activates materialized drop down menu fuctionality//
    $(".dropdown-trigger").dropdown();

    
  });