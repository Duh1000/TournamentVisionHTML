const app = new Realm.App({ id: "tournamentvisionwebsite-kkmpt" });

async function createAccount(email, password) {
    console.log(email);
    console.log(password);
    await app.emailPasswordAuth.registerUser({ email, password });
}

document.getElementById('signupbtn').onclick = function() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    createAccount(email,password);
};
