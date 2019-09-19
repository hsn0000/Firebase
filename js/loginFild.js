function loginUser() {
    var email=document.getElementById("u_email").value;
    var password=document.getElementById("u_password").value;
    
    //
    firebase.auth().signInWithEmailAndPassword(email,password).then(function () {
        
        window.location="home.php"

    }).catch(function(error) {

        var errorMessage=error.message;
        alert(errorMessage);

    });
}