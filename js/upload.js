function insert() {

    var name=document.getElementById("name").value;
    var gender=document.getElementById("gender").value;
    var country=document.getElementById("country").value;

    //
  firebase.database().ref('user/'+name).set({

     userName: name,
     userGender: gender,
     userCountry: country,

  });

}