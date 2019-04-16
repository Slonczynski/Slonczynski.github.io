// function loginButtonClicked() {
//   let loginFormValue = document.getElementsByClassName('form-control')[0].value;
//   let passwordFormValue = document.getElementsByClassName('form-control')[1]
//     .value;
//   console.log(loginFormValue);
//   console.log(passwordFormValue);

// Reset inputs
// }

function signUpButtonClicked() {
  let passwordFormValue = document.getElementsByClassName('form-control')[1]
    .value;
  let repeatPasswordFormValue = document.getElementsByClassName(
    'form-control'
  )[2].value;
  if (passwordFormValue === repeatPasswordFormValue) {
    console.log('success');
  } else console.log("Those passwords didn't match. Try again");
}

function checkIfPasswordsMatches(loginFormValue, passwordFormValue) {
  // let loginFormValue = document.getElementsByClassName('form-control')[0].value;
  // let passwordFormValue = document.getElementsByClassName('form-control')[1].value;

  if (loginFormValue === passwordFormValue) {
    console.log('success');
  } else console.log("Those passwords didn't match. Try again");
}

addEventListener('keyup', function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Trigger the button element with a click
    loginButtonClicked();
  }
});
