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
      console.error(error.message);
    });
}
