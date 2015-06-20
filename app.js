var greetr = G$();

greetr.greet().setLanguage('es').greet(true).log();

$('#login').on('click', function() {
  var loginGrtr = G$('Nathan', 'Hall');

  $('#logindiv').hide();

  loginGrtr.setLanguage($("#lang").val()).HTMLGreeting('#greetings', true).log();

});
