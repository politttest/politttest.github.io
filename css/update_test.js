sbjct = document.getElementById("subject");
sbjct.value = localStorage.c1ass;
document.getElementById("name_of_the_update_test").value = localStorage.name;
document.getElementById("time_of_the_update_test").value = localStorage.time; 
//console.log(localStorage.name);

function load_answers_in_accordion(){
    const databaseRef = firebase.database().ref("/questions/").child(localStorage.id);
    var value;

    databaseRef.orderByKey().on('value', snapshot => {
    snapshot.forEach(function (childSnapshot) {
        value = childSnapshot.val();
        console.log(value);
    })})
}

function to_results(){
    document.location.href = "list_with_results.html"
}


function questions(){
    document.location.href = "questions.html";
}

function marks(){
    document.location.href = "marks.html";
}

function testers(){
    document.location.href = "testers.html";
}