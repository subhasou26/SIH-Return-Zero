
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
  import { getDatabase,set,ref} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
  
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyD-0RjuT3s9R4NtQf2CPyMknw77ZW8HLbE",
    authDomain: "evalt-fb0cd.firebaseapp.com",
    databaseURL: "https://evalt-fb0cd-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "evalt-fb0cd",
    storageBucket: "evalt-fb0cd.appspot.com",
    messagingSenderId: "1001077903387",
    appId: "1:1001077903387:web:436b141ef42c8101f428be"
  };

  // Initialize Firebase
  const app=initializeApp(firebaseConfig);
  const auth = getAuth();
  const database=getDatabase(app);

  // Initialize Firebase




  // set up  register function

  function register(){
     email=document.getElementById("email").value;
     password=document.getElementById("password").value;
      full_name=document.getElementById("fullname").value;
      ph_num=document.getElementById("ph-num").value;

    // validate input field
    /*if(validate_email(email)==false ||validate_password(password)==false ){
      alert("Email or password is Outta Line!!")
      return;
      // don't run the code
    }
    if(validate_field(full_name)==false||validate_field(ph_num)==false){
      alert("Field are not correct");
      return;
    }*/

    createUserWithEmailAndPassword(auth,email,password)
    .then(function(userCredential){
      var users=userCredential.user;

      // ADD THIS user tofirebase database
      
      set(ref(database,'users/'+users.uid),{
        full_name:full_name,
        email:email,
        ph_num:ph_num
      }).then(()=>{
        alert("user created succesfully");
      }).catch((error)=>{
        alert(error);
      })
      // creat user data
      var user_data={
        email:email,
        full_name:full_name,
        ph_num:ph_num,
        last_login:Date.now()
      }

      // save data to ddatabase
      



      alert("User created");

    }).catch(function(error){
      var error_code=error.code;
      var error_massage=error.message;
      alert(error_massage);
    })

  }

  function validate_email(email){
   expression= /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    if(expression.test(email)==true){
      // email is good
      return true;
    }

    else{
      // email is not good
      return false;
    }
  }

  function validate_password(password){
    // password must be atlest 8 char
    if(password<8){
      return false;
    }
    else{
      return true;
    }
  }

  function validate_field(field){
    if(field==null){
      return false;
    }
    else{
      return true;
    }
  }

  var register_btn=document.getElementById("submit");
  register_btn.onclick=register();