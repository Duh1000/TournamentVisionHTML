const app = new Realm.App({ id: "tournamentvisionwebsite-kkmpt" });

async function sendResetPasswordEmail(email) {
    await app.emailPasswordAuth.sendResetPasswordEmail({ email });
}


document.getElementById('rstpswbtn').onclick = function() {
    const password = document.getElementById("email").value;
    sendResetPasswordEmail(password);
};
