sbjct = document.getElementById("subject");
sbjct.value = localStorage.c1ass;
document.getElementById("name_of_the_update_test").value = localStorage.name;
document.getElementById("time_of_the_update_test").value = localStorage.time; 
console.log(localStorage.name);




function questions(){
    document.location.href = "questions.html";
}

function marks(){
    document.location.href = "marks.html";
}

function testers(){
    document.location.href = "testers.html";
}