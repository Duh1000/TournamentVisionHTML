const app = new Realm.App({ id: "tournamentvisionwebsite-kkmpt" });

async function createAccount(email, password) {
    try{
      let userRead = "";

      const result = await app.emailPasswordAuth.registerUser({ email, password });
      //add a promise return
      console.log("yay");
      userRead = "Successfully signed up";
      document.getElementById("error").innerHTML = userRead;

      return result;
    } catch(error) {
      console.log("already exists");
      console.log(error.statusCode);

      switch(error.statusCode) {
        case 400:
          userRead = "Password must be at least 8 characters";
          break;
        case 409:
          userRead = "User already exists";
          break;
        default:
          userRead = "Sorry, an unexpected error has occurred. Make sure your username is an email"
      }
    }
    document.getElementById("error").innerHTML = userRead;
}


document.getElementById('signupbtn').onclick = function() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    createAccount(email,password);
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
