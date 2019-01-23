$(document).ready(function() {
  var englishCheck = $('#eng')[0];
  var russianCheck = $('#rus')[0];
  var languageCheckbox = $('.language-checkbox');
  var hamburgerCheckbox = $('.hamburger-checkbox');

  englishCheck.addEventListener('click', function() {
    languageCheckbox.prop('checked', true);
    hamburgerCheckbox.prop('checked', true);
  });

  russianCheck.addEventListener('click', function() {
    languageCheckbox.prop('checked', true);
    hamburgerCheckbox.prop('checked', true);
  });
});
