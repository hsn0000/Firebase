<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>upload img</title>
</head>
<body>
    
  <center>
      <form action="" enctype="multipart/form-data">
           <label for="">Selec image:</label>
           <input type="file" id="image" accept="image/*"> <br><br>
           <button type="button" onclick="upload();">upload</button>
    </form>
  </center>



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

  <script src="js/uploadImage.js" type="text/javascript"></script>
</body>
</html>