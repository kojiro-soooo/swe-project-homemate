// const firebaseConfig = {
//     apiKey: "AIzaSyBeoc5Viu6gc-SM_KBf5PU0pNz9R_0kUTs",
//     authDomain: "softeng450650-homemate.firebaseapp.com",
//     databaseURL: "https://softeng450650-homemate-default-rtdb.firebaseio.com",
//     projectId: "softeng450650-homemate",
//     storageBucket: "softeng450650-homemate.appspot.com",
//     messagingSenderId: "972734046821",
//     appId: "1:972734046821:web:b9a59e8899ac1c647d5c8c",
//     measurementId: "G-HZWKV8D60F"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);

//   const auth =  firebase.auth();

// //   signup function
//   function signUp(){
//     var username = document.getElementById("email");
//     var password = document.getElementById("password");

//     const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
//     //
//     promise.catch(e=>alert(e.message));
//     alert("SignUp Successfully");
//   }

//   //signIN function
//   function  signIn(){
//     var email = document.getElementById("email");
//     var password  = document.getElementById("password");
//     const promise = auth.signInWithEmailAndPassword(email.value,password.value);
//     promise.catch(e=>alert(e.message));
    
//   }


function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");
    const homeForm = document.querySelector("#home");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
        
    });

    document.querySelector("#linkCreateAccount1").addEventListener("click", e => {
        e.preventDefault();
        homeForm.classList.add("form--hidden");
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
        
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");

    });

    document.querySelector("#linkLogin1").addEventListener("click", e => {
        e.preventDefault();
        homeForm.classList.add("form--hidden");
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");

    });



    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        // Perform your AJAX/Fetch login

        setFormMessage(loginForm, "error", "Invalid username/password combination");
    });

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
                setInputError(inputElement, "Username must be at least 10 characters in length");
            }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
})