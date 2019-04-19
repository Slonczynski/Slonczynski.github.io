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
    auth.createUserWithEmailAndPassword(email, password).then(cred => {});
  } else {
    document.getElementById('error-message').innerHTML =
      "Those passwords didn't match. Try again";
  }
}

function loginButtonClicked() {
  const email = document.getElementByClassName('form-control')[0].value;
  const password = document.getElementByClassName('form-control')[1].value;
}

// logout

const logout = document.querySelector('#logout-button');
logout.addEventListener('click', e => {
  auth.signOut().then(() => {
    console.log('user signed out');
  });
});
