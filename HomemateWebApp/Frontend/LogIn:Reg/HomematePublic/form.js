  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBeoc5Viu6gc-SM_KBf5PU0pNz9R_0kUTs",
    authDomain: "softeng450650-homemate.firebaseapp.com",
    databaseURL: "https://softeng450650-homemate-default-rtdb.firebaseio.com",
    projectId: "softeng450650-homemate",
    storageBucket: "softeng450650-homemate.appspot.com",
    messagingSenderId: "972734046821",
    appId: "1:972734046821:web:b9a59e8899ac1c647d5c8c",
    measurementId: "G-HZWKV8D60F"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth =  firebase.auth();

  //signup function
  function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    //
    promise.catch(e=>alert(e.message));
    alert("SignUp Successfully");
  }

  //signIN function
  function  signIn(){
    var email = document.getElementById("email");
    var password  = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));
    
  }


  //signOut

  function signOut(){
    auth.signOut();
    alert("SignOut Successfully from System");
  }

  //active user to homepage
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      var email = user.email;
      alert("Active user "+email);

    }else{
      alert("No Active user Found")
    }
  })