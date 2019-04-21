// logout

const logout = document.querySelector('#logout-button');
logout.addEventListener('click', e => {
  auth.signOut().then(() => {
    window.location.href = 'index.html';
    console.log('user signed out');
  });
});
