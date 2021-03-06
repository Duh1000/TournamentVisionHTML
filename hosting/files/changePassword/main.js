const app = new Realm.App({ id: "tournamentvisionwebsite-kkmpt" });

async function resetPassword(newpassword) {
    var url = window.location;
    var token = new URLSearchParams(url.search).get('token');
    var tokenId = new URLSearchParams(url.search).get('tokenId');
    await app.emailPasswordAuth.resetPassword({ password : newpassword, token, tokenId });
}


document.getElementById('rstpswbtn').onclick = function() {
    const password = document.getElementById("password").value;
    resetPassword(password);
};

const togglePassword = document.querySelector("#togglePassword")
const password = document.querySelector('#password');

  togglePassword.addEventListener('click', function (e) {
  // toggle the type attribute
  const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);
  // toggle the eye slash icon
  this.classList.toggle('fa-eye-slash');
});
