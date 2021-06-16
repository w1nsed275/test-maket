$(function () {
    $('.header_burger').click(function () {
        $('.header_burger,.header_menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

$('.header_link').click(function () {
    $('.header_menu, .header_burger').removeClass('active');
})