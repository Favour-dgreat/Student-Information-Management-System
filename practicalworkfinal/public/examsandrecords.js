 // Variables
 var ImageName, ImgUrl;
 var files = [];
 var reader;

 // Configuration
 var firebaseConfig = {
    apiKey: "AIzaSyAJqqvZ8A3OdWN_c2qZ8d6eFP3k3r_CJz8",
    authDomain: "light-s-project.firebaseapp.com",
    databaseURL: "https://light-s-project-default-rtdb.firebaseio.com/",
    projectId: "light-s-project",
    storageBucket: "light-s-project.appspot.com",
    messagingSenderId: "1070130977027",
    appId: "1:1070130977027:web:7c0bc4577c5e87d4c13136"
};

 //Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 //Selection Process
 document.getElementById("select").onclick = function(e) {

     var input = document.createElement('input');
     input.type= 'file';

     input.onchange = e => {
         files = e.target.files;
         reader = new FileReader();
         reader.onload = function() {
             document.getElementById("myimg").src = reader.result;  
         }
         reader.readAsDataURL(files[0]);
     }
     input.click();
 }

         //Upload Process

         // uploading Picture to Firebase Storage
     document.getElementById('upload').onclick = function() {
         ImgName = document.getElementById('namebox').value;
         var uploadTask = firebase.storage().ref('Exams And Records/'+ImgName).put(files[0]); 
         
         uploadTask.on('state_changed', function(snapshot){
             var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
             document.getElementById('UpProgress').innerHTML = 'Upload'+progress+'%'; 
         },

     // error handling
         function(error) {
             alert('error in saving the image');
         },
 
     // submitting the image link to the database

         function(){
             uploadTask.snapshot.ref.getDownloadURL().then(function(url){
                 ImgUrl = url;


                 firebase.database().ref('Exams and Records/'+ImgName).set({
                     Name: ImgName,
                     Link: ImgUrl
                 });
             alert('image added successfully');
                 location.reload();
             }
         );
     });
 } 

 // Retrieval Process
 document.getElementById('retrieve').onclick = function() {
     ImgName = document.getElementById('namebox').value;
     firebase.database().ref('Exams and Records/' +ImgName).on('value', function(snapshot){
         document.getElementById('myimg').src = snapshot.val().Link; 
     });
 }
