var photoURL_google,  displayName_google, email_google, element_google_photo;
var provider = new firebase.auth.GoogleAuthProvider();

function Authentication(){  
  sessionStorage.clear;
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
  sessionStorage.temp = [];
  //console.log(user);
  // Переход на Главную страницу в случае успешной авторизации.
  firebase.database().ref("/users/").orderByKey().on('value', snapshot => {
    sessionStorage.temp = snapshot;
    document.location.href = "MainMenu.html"; 
})
})}