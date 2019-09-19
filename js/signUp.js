function createUser() {

    var email=document.getElementById("userEmail").value;
    var password=document.getElementById("userPassword").value;
    var confirmPassword=document.getElementById("confirmPassword").value;

    console.log(password);
    console.log(confirmPassword);
    //
    if(password==confirmPassword)
    {
        // **
        firebase.auth().createUserWithEmailAndPassword(email,password).then(function () {

            window.location="home.php";

        }).catch(function(error) {
            
            var errorMessage=error.message;
            alert(errorMessage);

        });
    }
    else
    {

        alert("password does not matches");

    }
}