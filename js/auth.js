//signup
const signupForm = document.getElementsByClassName('form-control')[0];
sigupForm.addEventListener('submit', e => {
  const email = document.getElementsByClassName('form-control')[0].value;
  const password = document.getElementsByClassName('form-control')[1].value;

  auth.createUserWithEmailAndPassword();
});
