// get user credentials
function signupButtonClicked() {
  const email = document.getElementsByClassName('form-control')[0].value;
  const password = document.getElementsByClassName('form-control')[1].value;
  const repeatPassword = document.getElementsByClassName('form-control')[2]
    .value;

  if (password === repeatPassword) {
    document.getElementsByClassName('form-control')[0].value = '';
    document.getElementsByClassName('form-control')[1].value = '';

    // signup the user with Firebase
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(cred => {})
      .catch(error => {
        document.getElementById('error-message').innerHTML = error.message;
      });
  }
}
