const databaseRef = firebase.database().ref("/subjects/");
var value, id_of_the_test, klass_of_the_test, name_of_the_test, subject_of_the_test, time_of_the_test;

databaseRef.orderByKey().on('value', snapshot => {
    snapshot.forEach(function (childSnapshot) {
        value = childSnapshot.val();
        console.log(value);
        var selected = document.getElementById("subject");
        var op = document.createElement("option");
        op.innerHTML = value;
        selected.appendChild(op);
    })})
console.log("adwad");