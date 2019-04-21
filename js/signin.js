addEventListener('keyup', function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Trigger the button element with a click
    loginButtonClicked();
  }
});

function loginButtonClicked() {
  // nodes = document.getElementById('error-messages');
  // if (nodes) {
  //   document.getElementById('spinner-error-box').outerHTML = '';
  // }

  const email = document.getElementsByClassName('form-control')[0].value;
  const password = document.getElementsByClassName('form-control')[1].value;

  let node = document.createElement('div');
  node.setAttribute('class', 'spinner-border');
  document.getElementById('spinner-error-box').appendChild(node);

  auth
    .signInWithEmailAndPassword(email, password)

    .then(user => {
      console.log('success');
      window.location.href = 'todo.html';
    })
    .catch(error => {
      // let elem = document.getElementById('spinner-error-box');
      // while (elem[0]) {
      //   elem[0].parentNode.removeChild(elem[0]);
      // }
      // Show error to the user
      // let errorMessage = document.createElement('span');
      // node.setAttribute('id', 'error-messages');
      // document
      //   .getElementById('spinner-error-box')
      //   .appendChild(errorMessage).innerHTML = error.message;
    });
}
