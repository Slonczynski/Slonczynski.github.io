// logout

const logout = document.querySelector('#logout-button');
logout.addEventListener('click', e => {
  auth.signOut().then(() => {
    window.location.href = '/';
    console.log('user signed out');
  });
});
