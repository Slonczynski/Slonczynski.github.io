addEventListener('keyup', function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Trigger the button element with a click
    loginButtonClicked();
  }
});

function loginButtonClicked() {
  const email = document.getElementsByClassName('form-control')[0].value;
  const password = document.getElementsByClassName('form-control')[1].value;
  auth
    .signInWithEmailAndPassword(email, password)
    .then(user => {
      console.log('succes');
      window.location.href = 'todo.html';
    })
    .catch(error => {
      document.getElementById('error-messages').innerHTML = error.message;
    });
}
