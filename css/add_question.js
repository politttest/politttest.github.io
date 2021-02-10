var i = 4;
var bd_fr_nswr = document.getElementById("body_for_answer")
function add_answer(){
    if (i == 10) {
        alert("Не можна створювати більш ніж десять варіантів відповідей");
        return
    }

    i+=1;
    var blck = document.createElement("div");
    blck.className = "block_of_answer";
    blck.id = "block" + i;
    var fld = document.createElement("fieldset");
    fld.className = "pole_of_answer";
    var lgnd = document.createElement("legend");
    lgnd.innerHTML = "Відповідь " + i;
    var npt = document.createElement("input");
    npt.type = "text";
    npt.id = "a" + i;
    npt.className = "answer_on_the_question";
    var bttn = document.createElement("button");
    bttn.className = "button_to_delete_answer";
    bttn.id = "b" + i
    bttn.onclick = "delete_answer();";
    var spn = document.createElement("span");
    spn.innerHTML = "&#45;";
    var npt_check = document.createElement("input")
    npt_check.className = "input_to_change_answer"
    npt_check.id = "ch" + i;
    npt_check.type = "checkbox";

    bd_fr_nswr.appendChild(blck);
    blck.appendChild(fld);
    blck.appendChild(bttn);
    blck.appendChild(npt_check);
    fld.appendChild(lgnd);
    fld.appendChild(npt);
    bttn.appendChild(spn);

    test_add_answer();
}

function delete_answer(){

}

function back_to_test() {
    document.location.href = "questions.html";
}

function clear_to_form() {
    document.getElementById("name_of_the_question").value = "";
    document.getElementById("mark_of_the_question").value = "";
    for (var j = 1; j <= i; j++) {
        document.getElementById("ch" + j).checked = false;
        document.getElementById("a" + j).value = "";
    }
    if(i>4){
        bd_fr_nswr.removeChild(block5);
    }
    if(i>5){
        bd_fr_nswr.removeChild(block6);
    }
    if(i>6){
        bd_fr_nswr.removeChild(block7);
    }
    if(i>7){
        bd_fr_nswr.removeChild(block8);
    }
    if(i>8){
        bd_fr_nswr.removeChild(block9);
    }
    if(i>9){
        bd_fr_nswr.removeChild(block10);
    }
    i = 4;
}

function save_the_question(){
    var quest, mark, multi = false, count = 0, sel;
    quest = document.getElementById("name_of_the_question").value;
    mark_v = document.getElementById("mark_of_the_question").value;
    mark = Number(mark_v);

    if (quest == "") {
        window.alert("поле: 'Назва питання' має бути заповненим!"); 
        return;
    }
    if (mark == "") {
        window.alert("поле: 'Оцінка за питання' має бути заповненим!"); 
        return;
    }
    for (var k = 1; k <= i; k++){
        var doc = document.getElementById("ch" + k).checked;
        console.log(doc);
        if(doc = true  ){
            count += 1;
        }
    }
    if (count >1) {
        multi = true;
    }
    console.log(multi);
    var answers1 = [];
    var answers2 = [];
    sel = false;
    for (var j = 1; j <= i; j++) {
        var che = document.getElementById("a" + j).value;
        var doc2 = document.getElementById("ch" + j).checked;
        if(doc2 == true){
            sel = true;
        }
        else{
            sel = false;
        }
        console.log(j);
              answers1.push({
                    id: j,
                    text: che,
                    selected: sel
        })
              answers2.push({
                    id: j,
                    text: che
        })
    }


    var newPostKey = firebase.database().ref().child('/answers/').child(localStorage.id).push().key;

    var postData1 = {
        text: quest,
        id: newPostKey,
        mark: mark,
        answers: answers1
    };
    var postData2 = {
        text: quest,
        id: newPostKey,
        multi: multi,
        answers: answers2
    };
        
        var updates = {};
        updates['/answers/' + localStorage.id + '/' + newPostKey] = postData1;
        updates['/questions/' + localStorage.id + '/' + newPostKey] = postData2;
      
        return firebase.database().ref().update(updates);
}

{

    /*
    var way_to_answer =  firebase.database().ref().child('/answers/').child(localStorage.id).push();
    localStorage.id_way_to_answer = way_to_answer.key
    way_to_answer.update({
        mark: mark,
        text: quest,
        id: way_to_answer.key,
        //console.log(nm_text)
    })
    
    for (var j = 1, auto_index_to_answer = 0; j <= i; j++) {

        var sel = "false"
        var doc = document.getElementById("ch" + j).checked;
        if(doc){
            sel = "true";
            count += 1;
        }

        var che = document.getElementById("a" + j).value;

        way_to_answer.update({
            answers:{
                auto_index_to_answer:{
                    id: j,
                    text: che,
                    selected: sel
                }
            }
        })
        auto_index_to_answer += 1;
    }
    
    if (count >= 2) {
        multi = "true"
    }

    var way_to_question =  firebase.database().ref().child('/questions/').child(localStorage.id).child(localStorage.id_way_to_answer);
    //localStorage.id_way_to_question = way_to_question.key
    way_to_question.update({
        multi: multi,
        text: quest,
        id: way_to_question.key,
        //console.log(nm_text)
    })


    for (var k = 1, auto_index_to_question = 0; k <= i; k++) {
        var que = document.getElementById("a" + k).value;
        way_to_question.update({
            answers:{
                auto_index_to_question:{
                    id: k,
                    text: que,
                }
            }
        })
        auto_index_to_question += 1;
    }*/
}