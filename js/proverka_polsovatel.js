var bool = false;
console.log("first  " + bool);
firebase.database().ref("/users/").orderByKey().on('value', snapshot => {
    snapshot.forEach(function (childSnapshot) {
      bool = true; 
      console.log("second  " + bool);
})})
/*if(!bool){
    document.location.href = "index.html";
}*/

