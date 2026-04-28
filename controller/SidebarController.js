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
        $('#sidebar').addClass('d-none');
        $('#header').addClass('d-none');
        $('.content').hide();
        $('#signupSection').addClass('d-none');
        $('#loginSection').removeClass('d-none');
    }
});