var photoURL_google,  displayName_google, email_google, element_google_photo;
var provider = new firebase.auth.GoogleAuthProvider();

function Authentication(){  
  firebase.auth().signInWithPopup(provider).then((result) => {

  /** @type {firebase.auth.OAuthCredential} */
  var credential = result.credential;
  // Токены для базы данных пользователя - переменная token
  var token = credential.accessToken; 
  // Информация о пользователе - переменная user
  var user = result.user;
  // Загружает в локальную память значения для передачи в спец. поля на Главной страницы. Замена куки.
  sessionStorage.photoURL_google = user.photoURL
  sessionStorage.displayName_google = user.displayName
  sessionStorage.email_google = user.email
  //console.log(user);
  // Переход на Главную страницу в случае успешной авторизации.
  firebase.database().ref("/users/").orderByKey().on('value', snapshot => {
    snapshot.forEach(function (childSnapshot) {
      document.location.href = "MainMenu.html"; 
})})
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
  sessionStorage.clear;
  window.alert("Цей сайт виключно для вчителів. Якщо ви використали не ту пошти - вийдіть з цієї та зайдіть з потрібної.")
});}

 

