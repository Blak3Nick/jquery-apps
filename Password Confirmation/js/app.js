var $password = $("#password");
var $confirmpassword = $("#confirm_password");


$("form span").hide();
function isPasswordValid() {
  return $password.val().length >8;
}
function arePasswordsMatching() {
  return $password.val() === $confirmpassword.val();
}

function canSubmit() {
  return isPasswordValid() && arePasswordsMatching();
}

function passwordEvent(){
    //Find out if password is valid
    if(isPasswordValid()) {
      //Hide hint if valid
      $password.next().hide();
    } else {
      //else show hint
      $password.next().show();
    }
}
$("#submit").click(function(){
  alert("Success!");
  event.preventDefault();
});
//When event happens on password input

function confirmPasswordEvent() {
  if(arePasswordsMatching()) {
    $confirmpassword.next().hide();

  } else {
    $confirmpassword.next().show();
  }
}
function enableSubmitEvent() {
  $("#submit").prop("disabled", !canSubmit());
}
$password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);
$confirmpassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);
enableSubmitEvent();
