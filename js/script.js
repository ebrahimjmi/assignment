$(document).ready(function(){

    var team_members_count = $('.our-team ul li').length;

    console.log(team_members_count);

   var addSlider =  function() {
    $(".our-team ul").slick({
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true,
    })
   }
    
   if (team_members_count > 3) {
    addSlider();
   } 
});