addEventListener('keyup', function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Trigger the button element with a click
    signupButtonClicked();
  }
});
// get user credentials
function signupButtonClicked() {
  let spinner = document.createElement('span');
  spinner.setAttribute('class', 'spinner-border spinner-border-sm');
  spinner.setAttribute('id', 'spinning-button');
  document.getElementsByClassName('btn btn-success')[0].appendChild(spinner);

  const email = document.getElementsByClassName('form-control')[0].value;
  const password = document.getElementsByClassName('form-control')[1].value;
  const repeatPassword = document.getElementsByClassName('form-control')[2]
    .value;

  if (password === repeatPassword) {
    document.getElementById('input-password').value;
    document.getElementsByClassName('input-repeat-password').value = '';

    // signup the user with Firebase
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(user => {
        window.location.href = 'todo.html';
      })
      .catch(error => {
        spinner.parentNode.removeChild(spinner);
        document.getElementById('error-message').innerHTML = error.message;
      });
  } else {
    spinner.parentNode.removeChild(spinner);
    document.getElementById('error-message').innerHTML =
      "Those passwords didn't match. Try again.";
  }
}
