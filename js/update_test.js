sbjct = document.getElementById("subject");
sbjct.value = sessionStorage.c1ass;
document.getElementById("name_of_the_update_test").value = sessionStorage.name;
document.getElementById("time_of_the_update_test").value = sessionStorage.time; 
//console.log(sessionStorage.name);

function load_answers_in_accordion(){
    const databaseRef = firebase.database().ref("/questions/").child(sessionStorage.id);
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