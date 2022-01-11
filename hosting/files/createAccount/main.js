const app = new Realm.App({ id: "tournamentvisionwebsite-kkmpt" });

async function createAccount(email, password) {
    console.log(email);
    console.log(password);
    try{
      let userRead = "";

      await app.emailPasswordAuth.registerUser({ email, password });
      //add a promise return

      userRead = "Created successfully";
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
