$(function () {
    
    $('p').hide(3000).show(4000);
    
    $('h1').fadeOut(3000).fadeIn(3000);
    
    $('h2').slideUp(3000).slideDown(3000);
    
    $('h3').animate({'font-size':'20em', 'margin-center': '100px'},3000,animacja);
    
    function animacja(){
        
        $('h3').animate({'font-size': '1em'},2000);
        
    }
    
    
    });