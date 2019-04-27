addEventListener('keyup', function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Trigger the button element with a click
    loginButtonClicked();
  }
});

function loginButtonClicked() {
  let spinner = document.createElement('span');
  spinner.setAttribute('class', 'spinner-border spinner-border-sm');
  document.getElementsByClassName('btn btn-success')[0].appendChild(spinner);

  const email = document.getElementsByClassName('form-control')[0].value;
  const password = document.getElementsByClassName('form-control')[1].value;

  auth
    .signInWithEmailAndPassword(email, password)

    .then(user => {
      window.location.href = 'todo.html';
    })
    .catch(error => {
      spinner.parentNode.removeChild(spinner);
      document.getElementById('error-message').innerHTML = error.message;
    });
}
