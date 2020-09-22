$(document).ready(function()
{
    //owl carousel
    $(".owl-carousel").owlCarousel({
        loop:true,
        margin:10,
        autoplay:false,
        rtl:true,
        nav: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3,
            }
        }
    });
    /*--------------------------------------------------------------------------------------------------------------------*/
    //select box
    $(".city-big").selectric();
   

    // calendar
   
   $('.calendar').calendar();
   $calenhs = $('.calendar').calendar();
   $calenhs.hide();
   $('#calen-st-icon').click(function()
    {
        $(".calendar1").fadeIn();
    });

    $('#calen-sec-icon').click(function()
    {
        $(".calendar2").fadeIn();
    });
    
   $('.calendar1').calendar(
    {
        onSelect:function(event)
        {
         $('.out-calen1').text(event.label),
        $calenhs.hide();

        }
    });
$('.calendar2').calendar(
    {
        onSelect:function(event)
        {
         $('.out-calen2').text(event.label),
        $calenhs.hide();

        }
    });

   

});

/*-------------------------------------------------------------------------------------------------------------------------------------*/
//pre loading screen 
$(!'window').ready(function()
{
    $(".pre-load .spinner").fadeOut(1000 , function(){
        $(this).parent().fadeOut(1500,function(){
            $(this).remove();
        });
    }); 
});
/*-----------------------------------------------------------------------------------------------------------*/

