
function getdata() {

    var user=document.getElementById("user").value;

    //

    firebase.database().ref('user/'+user).once('value').then(function(snapshort) {

        var name=snapshort.val().userName;
        var gender=snapshort.val().userGender;
        var country=snapshort.val().userCountry;

        //

        document.getElementById("name").innerHTML=name;
        document.getElementById("gender").innerHTML=gender; 
        document.getElementById("country").innerHTML=country;

    })

}