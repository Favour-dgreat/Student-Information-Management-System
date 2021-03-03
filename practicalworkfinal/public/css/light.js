// / VARRIABLES
var ImgName, ImgUrl;
var flie = [];
var reader; 
// confiquration
var firebaseConfig = {
    apiKey: "AIzaSyBnpaP-C2gRcdFXw3wX7l8Mw5KD29v4wNs",
    authDomain: "filemanagementsystem-74728.firebaseapp.com",
    projectId: "filemanagementsystem-74728",
    storageBucket: "filemanagementsystem-74728.appspot.com",
    messagingSenderId: "86600871169",
    appId: "1:86600871169:web:70a621d9dd659352967f00"
  };



  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
//   selection process 
 document.getElementById("select").onclick = function(e){
    
    var input = document.createElement('input');
    input.type= 'file';
    
    
   

    input.onchange = e =>{
        files = e.target.files;
        reader  = new FileReader();
        reader.onload = function(){
            document.getElementById("myimg").src = reader.result;
        }
        reader.readAsDataURL( files[0]);
    } 
    input.click();
}
    // UPLOAD PROCESS
    // document.getElementById('upload').onclick = function(){
    //     ImgName = document.getElementById('namebox').value;
       
    //     var uploadTask = firebase.storage().ref('Images/'+ ImgName+".png").put(files[0]);
    //     uploadTask.on('state_changed', function(snapshot){
    //     var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //     document.getElementById('UpProgress').innerHTML = 'upload'+progress+'%';
    //     },
    //     function(error){
    //         alert('error in saving the image');
    //     },  
    //     function(){
    //         uploadTask.snapshot.ref.getDownloadURL().then(function(url){
    //          ImgUrl = url;


    //             firebase.database().ref('Pictures/'+ImgName).set({
    //                 Name: ImgName,
    //                 Link: ImgUrl,
    //     }); 
    //     alert('image uploaded successfully');
    //         }  
    //         );

    //     });  
    //     }