const app = new Realm.App({ id: "tournamentvisionwebsite-kkmpt" });

async function verifyEmail(){
    var url = window.location;
    var token = new URLSearchParams(url.search).get('token');
    var tokenId = new URLSearchParams(url.search).get('tokenId');
    await app.emailPasswordAuth.confirmUser({ token, tokenId });
}

verifyEmail();