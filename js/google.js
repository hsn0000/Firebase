function GoogleLogin() {

    var provider=new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider).then(function(){

        window.location="home.php"

    }).catch(function(error) {

        var errorMessage=error.message;
        alert(errorMessage);

    })

}