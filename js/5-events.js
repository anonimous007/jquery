$(function () {

    $('p').click(function () {
        $(this).css("color", "purple");
    });


    $('h1').on({
        'click': function () {
            $(this).css("color", "orange");
        },

        'mouseleave': function () {
            $(this).css("color", "inherit");
            
        }
        }):
});