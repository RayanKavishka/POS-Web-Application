// Side Bar Showing Logic
let isActive = true;

$('header button').on('click', function () {
    isActive = !isActive;

    if (isActive) {
        $('#sidebar').addClass('d-flex').css({display: ''});
        $('.content').css({marginLeft: '280px'});
    } else {
        $('#sidebar').removeClass('d-flex').css({display: 'none'});
        $('.content').css({marginLeft: '15px'});
    }
});


// Side Bar Navigation
$('.content').hide();
$('#dashboardSection').show();

$('aside button').on('click', function () {
    $('.content').hide();

    if ($(this).text() === "Dashboard") {
        $('#dashboardSection').show();

    } else if ($(this).text() === "Place Order") {
        $('#placeOrderSection').show();

    } else if ($(this).text() === "Customers") {
        $('#customerSection').show();

    } else if ($(this).text() === "Items") {
        $('#ItemSection').show();

    }  else if ($(this).text() === "Order History") {
        $('#OrderHistorySection').show();

    } else {
        window.location.replace('index.html');
    }
});