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