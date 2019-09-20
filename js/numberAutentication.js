 window.onload=function () {
    
    render();

 };
 function render() {

    window.recaptchaVerifier=new firebase.auth.RecaptchaVerifier('recaptcha-container');
    recaptchaVerifier.render(); 

 }

 function phoneAuth() {
    
    //
    var number=document.getElementById('number').value;
    // function firebase phone number
    firebase.auth().signInWithPhoneNumber(number,window.recaptchaVerifier).then(function (confirmationResult) {

        window.confirmationResult=confirmationResult;
        coderesult=confirmationResult;
        console.log(coderesult);
        alert('Message send');

    }).catch(function (error) {
        
        alert(error.message);

    });
    function codeVerify() {
        
        var code=document.getElementById('verificationCode').value;
        coderesult.confirm(code).then(function (result) {

            alert("Successfully registered");
            var user=result.user;
            console.log(user);

        }).catch(function (error) {
            
            alert(error.message);

        });

    }

 }


 