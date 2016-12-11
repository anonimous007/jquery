$(function(){
    var textPpierwszego = $('#paragraph').text();
    console.log(textPpierwszego);
    
    $('.paragraph').text(textPpierwszego);
    
    
    /*dodanie dodatkowego paragrafu po klasie 'paragraphnext'*/
    $('.paragraphnext').html('Tojest <strong> paragraf </strong>');
    
    $('.paragraphnext').append('To jest tresc po selktorze APPEND');
    
    $('.paragraphnext').after('To jest tresc po selktorze AFTER');
    
    $('strong').remove();
    
    
});