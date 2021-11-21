$(document).ready(function() {
    $('.hide1').hide();
    $('.hide-text1').hide();

});
$(document).ready(function() {
    $('.show-text1').click(function() {
        $('.hide1').slideToggle();
        $('.show-text1').hide();
        $('.hide-text1').show();
    });
});
$(document).ready(function() {
    $('.hide-text1').click(function() {
        $('.hide1').slideToggle();
        $('.hide-text1').hide();
        $('.show-text1').show();
    });
});
$(document).ready(function() {
    $('.hide2').hide();
    $('.hide-text2').hide();

});
$(document).ready(function() {
    $('.show-text2').click(function() {
        $('.hide2').slideToggle();
        $('.show-text2').hide();
        $('.hide-text2').show();
    });
});
$(document).ready(function() {
    $('.hide-text2').click(function() {
        $('.hide2').slideToggle();
        $('.hide-text2').hide();
        $('.show-text2').show();
    });
});