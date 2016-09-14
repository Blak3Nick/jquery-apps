var $password = $("#password");
var $confirmpassword = $("#confirm_password");


$("form span").hide();
function isPasswordValid {
  return $password.val().length >8;
}

function passwordEvent(){
    //Find out if password is valid
    if($(isPasswordValid) {
      //Hide hint if valid
      $password.next().hide();
    } else {
      //else show hint
      $password.next().show();
    }
}

//When event happens on password input
$("#password").focus(passwordEvent).keyup(passwordEvent);
function confirmPasswordEvent() {
  if($password.val)
}
//When event happens on confirmation input
  //Find out if password and confirmation match
    //Hide hint if match
    //else show hint
