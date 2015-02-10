$(function(){
  $("#form-top").on("submit", function(e){
    var $email = $(this).find("input[type=email]");
    var $message = $(this).find(".newsletter-message");
    if ($email.val() == "") {
      $message.text("Et ton mail ??").css("color", "orange");
      $('<style>').text('.input__label--hoshi-color-1::after { border-color: orange}').appendTo($('body'));
    } else {
      $(this).find(".bt").hide();
      $message.text("Merci ! See you soon!").css("color", "#1ECF6D");
      $('<style>').text('.input__label--hoshi-color-1::after { border-color: #1ECF6D}').appendTo($('body'));
      $email.attr("disabled", "disabled").css("opacity", "0.1");
    }
  });

  $("#form-bottom").on("submit", function(e){
    var $email = $(this).find("input[type=email]");
    var $message = $(this).find(".newsletter-message");
    if ($email.val() == "") {
      $message.text("Et ton mail ??").css("color", "#FBFF0D");
    } else {
      $(this).find(".bt").fadeOut()
      $('.input__label-content--kyo').fadeOut()
      $('#form-bottom').parent().find('h1').text('Merci ! See you soon!').css('color', '#1ECF6D')
      $email.attr("disabled", "disabled").css("opacity", "0.1");
    }
  });
});
