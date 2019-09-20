<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Phone number autentication Firebase</title>
</head>
<body>

  <h1>Enter number to create account</h1>

  <form action="">
      <input type="text" id="number" placeholder="+62821*******">
      <div id="recaptcha-container"></div>
      <button type="button" onclick="phoneAuth();">SendCode</button>
  </form><br>
  <h1>Enter Verivication Code</h1>
    <form action="">
        <input type="text" id="verificationCode" placeholder="Enter verification code">
        <button type="button" onclick="codeVerify();">Verify Code</button>
    </form>
    



 <!-- The core Firebase JS SDK is always required and must be listed first -->
 <script src="https://www.gstatic.com/firebasejs/6.6.1/firebase.js"></script>
    <!-- TODO: Add SDKs for Firebase products that you want to use
        https://firebase.google.com/docs/web/setup#config-web-app -->
    <script>
        // Your web app's Firebase configuration
        var firebaseConfig = {
            apiKey: "AIzaSyD-T4Ia01GpCt16xuYCNuG7_uCgAiYHxEQ",
            authDomain: "fir-web-29e00.firebaseapp.com",
            databaseURL: "https://fir-web-29e00.firebaseio.com",
            projectId: "fir-web-29e00",
            storageBucket: "fir-web-29e00.appspot.com",
            messagingSenderId: "76995500026",
            appId: "1:76995500026:web:b0fb3af319289f72eff643"
      };
    // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
    </script>

  <script src="js/numberAutentication.js" type="text/javascript"></script>


</body>
</html>