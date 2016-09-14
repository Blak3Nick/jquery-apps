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

//When event happens on password input

function confirmPasswordEvent() {
  if(arePasswordsMatching()) {
    $confirmpassword.next().hide();

  } else {
    $confirmpassword.next().show();
  }
}
function enableSubmitEvent() {

}
$password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent);
$confirmpassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent);
