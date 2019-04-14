function loginButtonClicked() {
  let loginFormValue = document.getElementsByClassName('form-control')[0].value;
  let passwordFormValue = document.getElementsByClassName('form-control')[1]
    .value;
  console.log(loginFormValue);
  console.log(passwordFormValue);
}
addEventListener('keyup', function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Trigger the button element with a click
    loginButtonClicked();
  }
});
