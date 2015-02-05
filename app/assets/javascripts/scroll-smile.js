$(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() == $(document).height()) {
    $('#logo-footer .smile').attr('class', 'smile-action')
   }
});

$( ".input__field--kyo").blur(function () {
  console.log('yo');
})

$(document).on('focus', ".input__field--kyo", function(){
  $('#logo-footer').addClass('logo-footer-white')
  $('footer h1').addClass('h1-onfocus ')
})


$(document).on('blur', '.input__field--kyo', function(){
  $('#logo-footer').removeClass('logo-footer-white')
  $('footer h1').removeClass('h1-onfocus ')

})