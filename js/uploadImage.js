function upload() {

    var image=document.getElementById("image").files[0];
  //
   var imageName=image.name;
   //
   var storageRef=firebase.storage().ref('images/'+imageName);
   //
   var uploadTask=storageRef.put(image);

   uploadTask.on('state_changed', function(snapshot) {

    //
    var progress=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
    
    console.log("upload is" + progress + "done");

   },function(error) {

       console.log(error.message);

   },function() {

    // handle upload suksesful on complete
     uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {

       console.log(downloadURL);

     })

   })

}