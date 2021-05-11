document.getElementById("subject").value = sessionStorage.c1ass;
document.getElementById("name_of_the_update_test").value = sessionStorage.name;
document.getElementById("time_of_the_update_test").value = sessionStorage.time;
var cl1ss = sessionStorage.cl1ss;
var subject = sessionStorage.subject;
console.log(cl1ss)

setTimeout(() => {
    document.getElementById(subject).selected = true;
    document.getElementById(cl1ss).selected = true;
}, 1500);


/*const databaseRef = firebase.database().ref("/questions/").child(sessionStorage.id);
function load_answers_in_accordion() {
    const databaseRef = firebase.database().ref("/questions/").child(sessionStorage.id);
    var value;

    databaseRef.orderByKey().on('value', snapshot => {
        snapshot.forEach(function (childSnapshot) {
            value = childSnapshot.val();
            console.log(value);
        })
    })
}*/

function to_results() {
    document.location.href = "list_with_results.html"
}


function questions() {
    document.location.href = "questions.html";
}

function testers() {
    document.location.href = "testers.html";
}

const databaseRefTest = firebase.database().ref("/tests/").child(sessionStorage.id);
function update() {
    databaseRefTest.orderByKey().on('value', snapshot => {
        test = snapshot.val()
    })
    sbjct = document.getElementById("subject");
    sbjct_text = sbjct.options[sbjct.selectedIndex].text;
    c1ass = document.getElementById("klass");
    c1ass_text = c1ass.options[c1ass.selectedIndex].text;
    if (c1ass_text == "8-й клас"){
        c1ass_text = 8
    }
    if (c1ass_text == "9-й клас"){
        c1ass_text = 9
    }
    if (c1ass_text == "10-й клас"){
        c1ass_text = 10
    }
    if (c1ass_text == "11-й клас"){
        c1ass_text = 11
    }
    databaseRefTest.update({
        title: document.getElementById("name_of_the_update_test").value,
        time: Number(document.getElementById("time_of_the_update_test").value),
        update: Date.now(),
        subject: sbjct_text,
        c1ass: Number(c1ass_text),
    })
}