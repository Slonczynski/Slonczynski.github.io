// logout

const logout = document.querySelector('#logout-button');
logout.addEventListener('click', e => {
  auth.signOut().then(() => {
    console.log('user signed out');
  });
});
