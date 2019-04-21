addEventListener('keyup', function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Trigger the button element with a click
    loginButtonClicked();
  }
});

function loginButtonClicked() {
  nodes = document.getElementById('spinner-error-box');
  if (nodes) {
    document.getElementById('spinner-error-box').outerHTML = '';
  }
  const email = document.getElementsByClassName('form-control')[0].value;
  const password = document.getElementsByClassName('form-control')[1].value;

  let node = document.createElement('div');
  node.setAttribute('class', 'spinner-border');
  document.getElementById('spinner-error-box').appendChild(node);

  auth
    .signInWithEmailAndPassword(email, password)

    // let div = document.createElement('spinner');
    // div
    //   .setAttribute('class', 'spinner-border')

    .then(user => {
      console.log('success');
      window.location.href = 'todo.html';
    })
    .catch(error => {
      // let el = document.getElementsByClassName('spinner-border');

      // document.getElementById('error-message').removeChild(el);

      // document.getElementById('error-messages').innerHTML = error.message;

      // let elem = document.getElementById('#');
      // elem.removeChild(elem);

      // Show error to the user
      let errorMessage = document.createElement('span');
      node.setAttribute('id', 'error-messages');
      document
        .getElementById('spinner-error-box')
        .appendChild(errorMessage).innerHTML = error.message;
    });
}
