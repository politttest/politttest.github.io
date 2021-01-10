var photoURL_google,  displayName_google, email_google, element_google_photo;

  // Переменная для подключения к конкретной базе данных.
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
  // Используя вышеназванную переменную инициализирует базу данных.
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  // Создайте экземпляр объекта поставщика Google:
var provider = new firebase.auth.GoogleAuthProvider();

function Authentication(){  firebase.auth().signInWithPopup(provider).then((result) => {

  /** @type {firebase.auth.OAuthCredential} */
  var credential = result.credential;
  // Токены для базы данных пользователя - переменная token
  var token = credential.accessToken; 
  // Информация о пользователе - переменная user
  var user = result.user;
  // Загружает в локальную память значения для передачи в спец. поля на Главной страницы. Замена куки.
  localStorage.setItem('photoURL_google', user.photoURL);
  localStorage.setItem('displayName_google', user.displayName);
  localStorage.setItem('email_google', user.email);
  // Переход на Главную страницу в случае успешной авторизации.
  document.location.href = "MainMenu.html";

}).catch((error) => {
  console.log(error)
  window.alert(error);
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});}

 

