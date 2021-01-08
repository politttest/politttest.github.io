function onSuccess(googleUser) {
    console.log('Logged in as: ' + googleUser.accessToken);
    console.log('Logged in as: ' + googleUser);
  }
  function onFailure(error) {
    console.log(error);
  }
  function renderButton() {
    gapi.signin2.render('my-signin2', {
      'scope': 'profile email',
      'width': 200,
      'height': 30,
      'longtitle': true,
      'theme': 'dark',
      'onsuccess': onSuccess,
      'onfailure': onFailure
    });
  }

  var firebaseConfig = {
    apiKey: "AIzaSyAY5l-gAkhqDdabvglE7sUbvCKSjsXh5fU",
    authDomain: "politttest.firebaseapp.com",
    databaseURL: "https://politttest.firebaseio.com",
    projectId: "politttest",
    storageBucket: "politttest.appspot.com",
    messagingSenderId: "284318167721",
    appId: "1:284318167721:web:c82cbe8f464fc46d9f2fb8",
    measurementId: "G-QPJVREDDSF"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  // Создайте экземпляр объекта поставщика Google:
  var provider = new firebase.auth.GoogleAuthProvider();


  
function Authentication(){  firebase.auth().signInWithPopup(provider).then((result) => {
  /** @type {firebase.auth.OAuthCredential} */
  var credential = result.credential;
  var token = credential.accessToken; 
  // The signed-in user info.
  var user = result.user;
  //console.log(credential)
  //console.log(user)
  document.location.href = "button_google.html";
}).catch((error) => {
  //console.log(error)
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});}