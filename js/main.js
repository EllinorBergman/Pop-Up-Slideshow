$(document).ready(function(){
 
var $slider = $('.gallery'); 
var $slide = 'li'; 
var $transition_time = 1000; 
var $time_between_slides = 9000; 

function slides(){
  return $slider.find($slide);
}

slides().slideUp();

slides().first().addClass('active');
slides().first().fadeIn($transition_time);

$interval = setInterval(
    function(){
      var $i = $slider.find($slide + '.active').index();
    
      slides().eq($i).removeClass('active');
      slides().eq($i).slideUp($transition_time);
    
      if (slides().length == $i + 1) $i = -1; // loop to start
    
      slides().eq($i + 1).fadeIn($transition_time);
      slides().eq($i + 1).addClass('active');
    }
    , $transition_time +  $time_between_slides 
);

   var speed = 100;

  
$(".prev").click(function() {
        var now = $(this).parent().next("ul").children(":visible"),
            last = $(this).parent().next("ul").children(":last"),
            prev = now.prev();
            prev = prev.index() == -1 ? last : prev;
        now.fadeOut(speed, function() {prev.fadeIn(speed);});
    });

    $(".next").click(function() {
        var now = $(this).parent().next("ul").children(':visible'),
            first = $(this).parent().next("ul").children(':first'),
            next = now.next();
            next = next.index() == -1 ? first : next;
        now.fadeOut(speed, function() {next.fadeIn(speed);});
    });

$('a.lightbox').click(function(e) {
  $('body').css('overflow-y', 'hidden');
  $('<div id="overlay"></div>')
    .css('top', $(document).scrollTop())
    .css('opacity', '0')
    .animate({'opacity': '0.9'}, 'slow')
    .appendTo('body');
  $('<div id="lightbox"></div>')
    .hide()
    .appendTo('body');
  $('<img>')
    .attr('src', $(this).attr('href'))
    .load(function() {
      positionLightboxImage();
    })
    .click(function() {
      removeLightbox();
    })
    .appendTo('#lightbox');
  return false;
});

function positionLightboxImage() {
  var top = ($(window).height() - $('#lightbox').height()) / 2;
  var left = ($(window).width() - $('#lightbox').width()) / 2;
  $('#lightbox')
    .css({
      'top': top + $(document).scrollTop(),
      'left': left
})
.fadeIn(); }

function removeLightbox() {
  $('#overlay, #lightbox')
    .fadeOut('slow', function() {
      $(this).remove();
      $('body').css('overflow-y', 'auto'); // show scrollbars!
}); }



});