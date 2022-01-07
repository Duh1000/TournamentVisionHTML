import * as Realm from "realm-web";

const app = new Realm.App({ id: "tournamentvision-ozzus" });

document.getElementById('button').onclick = function() {
    alert("button was clicked");
    const email = "ch318221@g.risd.org";
    const password = "Password";
    await app.emailPasswordAuth.registerUser({ email, password });
 };
