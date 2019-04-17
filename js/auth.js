// get user credentials
function signUpButtonClicked() {
  const email = document.getElementsByClassName('form-control')[0].value;
  const password = document.getElementsByClassName('form-control')[1].value;
  const repeatPassword = document.getElementsByClassName('form-control')[2]
    .value;

  if (password === repeatPassword) {
    document.getElementsByClassName('form-control')[0].value = '';
    document.getElementsByClassName('form-control')[1].value = '';

    // signup the user with Firebase
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
      console.log(cred.user);
    });
  } else {
    document.getElementById('error-message').innerHTML =
      "Those passwords didn't match. Try again";
  }
}
