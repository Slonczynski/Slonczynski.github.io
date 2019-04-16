// get user credentials
function loginButtonClicked() {
  const email = document.getElementsByClassName('form-control')[0].value;
  const password = document.getElementsByClassName('form-control')[1].value;

  document.getElementsByClassName('form-control')[0].value = '';
  document.getElementsByClassName('form-control')[1].value = '';

  // signup the user with Firebase
  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    console.log(cred.user);
  });
}
