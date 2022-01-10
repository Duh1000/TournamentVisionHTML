const app = new Realm.App({ id: "tournamentvisionwebsite-kkmpt" });

async function login(email, password) {
    const credentials = Realm.Credentials.emailPassword(email, password);
    try {
      const user = await app.logIn(credentials);
      console.log("Logged In")
      return user
    } catch(err) {
      console.error("Failed to log in", err);
    }
}


document.getElementById('loginbtn').onclick = function() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    login(email,password);
};