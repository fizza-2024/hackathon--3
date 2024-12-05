
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";


  import { getAuth,onAuthStateChanged ,createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

 
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBnylxxO2oggsLYJEimefDV2BSQW2TwIsA",
    authDomain: "practice-fd470.firebaseapp.com",
    projectId: "practice-fd470",
    storageBucket: "practice-fd470.firebasestorage.app",
    messagingSenderId: "188523101374",
    appId: "1:188523101374:web:b43a55d68f7e45d80fb2ef"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);

//get id's
const signup_email = document.getElementById('signup_email');
const signup_password= document.getElementById('signup_password');
const btn= document.getElementById('btn');

const signin_email = document.getElementById('signin_email');
const signin_password= document.getElementById('signin_password');
const btn_2= document.getElementById('btn_2');
// const logout_btn= document.getElementById('logout_btn')




btn.addEventListener("click",createUserAccount);
btn_2.addEventListener("click",signIn);
// logout_btn.addEventListener("click",logout);

onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log('user is logged in');
      const uid = user.uid;
    } else {
        console.log('user is not logged in');
    }
  });

  function createUserAccount (){
    // console.log("email=>",signup_email.value);
    // console.log("password=>",signup_password.value);
    createUserWithEmailAndPassword(auth, signup_email.value, signup_password.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log('user=>',user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
    // ..
  });
}
function signIn() {
  signInWithEmailAndPassword(auth, signin_email.value, signin_password.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}
  

