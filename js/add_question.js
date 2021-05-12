if (sessionStorage.key_answer != ""){
    firebase.database().ref().child('/answers/').child(sessionStorage.id).child(sessionStorage.key_answer).orderByKey().on('value', snapshot => {
        value = snapshot.val()
        console.log(value)
        document.getElementById("name_of_the_question").value = value.text;
        document.getElementById("mark_of_the_question").value = value.mark;
        console.log(document.getElementById("name_of_the_question"))
        arrWithAnswers = value.answers;
        for (var v = 1; v <= arrWithAnswers.length; v++) {
            console.log(v)
            document.getElementById("a" + v).value = arrWithAnswers[v-1].text
            document.getElementById("b" + v).setAttribute("style","display: none;")
            document.getElementById("ch" + v).setAttribute("style","display: block;")
            if(arrWithAnswers[v-1].selected){
                document.getElementById("ch" + v).checked = true;
            }
        }
    })
    document.getElementById("save_button").innerHTML = "Оновити питання"
    /* Эта функция срабатывает тогда, когда мы ИЗМЕНЯЕМ существующий тест */
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
    
        var postData1 = {
            text: quest,
            id: sessionStorage.key_answer,
            mark: mark,
            answers: answers1
        };
        var postData2 = {
            text: quest,
            id: sessionStorage.key_answer,
            multi: multi,
            answers: answers2
        };
            
            var updates = {};
            updates['/answers/' + sessionStorage.id + '/' + sessionStorage.key_answer] = postData1;
            updates['/questions/' + sessionStorage.id + '/' + sessionStorage.key_answer] = postData2;
            return firebase.database().ref().update(updates);
    }

}
else {
    /* Эта функция срабатывает тогда, когда мы создаем НОВЫЙ тест*/
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
    
    
        var newPostKey = firebase.database().ref().child('/answers/').child(sessionStorage.id).push().key;
    
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
        updates['/answers/' + sessionStorage.id + '/' + newPostKey] = postData1;
        updates['/questions/' + sessionStorage.id + '/' + newPostKey] = postData2;
        firebase.database().ref().update(updates);
        setTimeout(() => {
            document.location.href = "add_question.html";
        }, 1500);
    }

}

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
/**/
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

{

    /*
    var way_to_answer =  firebase.database().ref().child('/answers/').child(sessionStorage.id).push();
    sessionStorage.id_way_to_answer = way_to_answer.key
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

    var way_to_question =  firebase.database().ref().child('/questions/').child(sessionStorage.id).child(sessionStorage.id_way_to_answer);
    //sessionStorage.id_way_to_question = way_to_question.key
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





















    /* Проверка заполненности полей для отображения флажков справа от варианта ответа */
    if (i>0) {
        function showCount() {
            if(a1.value.length > 0){
                b1.style.display = "none";
                ch1.style.display = "block";
            }
            if(a1.value.length == 0){
                b1.style.display = "block";
                ch1.style.display = "none";
            }
            console.log(a1.value.length);
        }
        a1.onkeyup = a1.oninput = showCount;
        a1.onpropertychange = function() {
            if (event.propertyName == "value") showCount();
        }
        a1.oncut = function() {
            setTimeout(showCount, 0); // на момент oncut значение ещё старое
    };
    }
    console.log(i);
    if (i>1) {
        function showCount() {
            if(a2.value.length > 0){
                b2.style.display = "none";
                ch2.style.display = "block";
            }
            if(a2.value.length == 0){
                b2.style.display = "block";
                ch2.style.display = "none";
            }
            console.log(a2.value.length);
        }
        a2.onkeyup = a2.oninput = showCount;
        a2.onpropertychange = function() {
            if (event.propertyName == "value") showCount();
        }
        a2.oncut = function() {
            setTimeout(showCount, 0); // на момент oncut значение ещё старое
    };
    }
    if (i>2) {
        function showCount() {
            if(a3.value.length > 0){
                b3.style.display = "none";
                ch3.style.display = "block";
            }
            if(a3.value.length == 0){
                b3.style.display = "block";
                ch3.style.display = "none";
            }
            console.log(a3.value.length);
        }
        a3.onkeyup = a3.oninput = showCount;
        a3.onpropertychange = function() {
            if (event.propertyName == "value") showCount();
        }
        a3.oncut = function() {
            setTimeout(showCount, 0); // на момент oncut значение ещё старое
    };
    }
    if (i>3) {
        function showCount() {
            if(a4.value.length > 0){
                b4.style.display = "none";
                ch4.style.display = "block";
            }
            if(a4.value.length == 0){
                b4.style.display = "block";
                ch4.style.display = "none";
            }
            console.log(a4.value.length);
        }
        a4.onkeyup = a4.oninput = showCount;
        a4.onpropertychange = function() {
            if (event.propertyName == "value") showCount();
        }
        a4.oncut = function() {
            setTimeout(showCount, 0); // на момент oncut значение ещё старое
    };
    }
    if (i>4) {
        function showCount() {
            if(a5.value.length > 0){
                b5.style.display = "none";
                ch5.style.display = "block";
            }
                if(a5.value.length == 0){
                b5.style.display = "block";
                ch5.style.display = "none";
            }
            console.log(a5.value.length);
        }
        a5.onkeyup = a5.oninput = showCount;
        a5.onpropertychange = function() {
            if (event.propertyName == "value") showCount();
        }
        a5.oncut = function() {
            setTimeout(showCount, 0); // на момент oncut значение ещё старое
    };
    }
    if (i>5) {
        function showCount() {
            if(a6.value.length > 0){
                b6.style.display = "none";
                ch6.style.display = "block";
            }
                if(a6.value.length == 0){
                b6.style.display = "block";
                ch6.style.display = "none";
            }
            console.log(a6.value.length);
        }
        a6.onkeyup = a6.oninput = showCount;
        a6.onpropertychange = function() {
            if (event.propertyName == "value") showCount();
        }
        a6.oncut = function() {
            setTimeout(showCount, 0); // на момент oncut значение ещё старое
    };
    }
    if (i>6) {
        function showCount() {
            if(a7.value.length > 0){
                b7.style.display = "none";
                ch7.style.display = "block";
            }
                if(a7.value.length == 0){
                b7.style.display = "block";
                ch7.style.display = "none";
            }
            console.log(a7.value.length);
        }
        a7.onkeyup = a7.oninput = showCount;
        a7.onpropertychange = function() {
            if (event.propertyName == "value") showCount();
        }
        a7.oncut = function() {
            setTimeout(showCount, 0); // на момент oncut значение ещё старое
    };
    }
    if (i>7) {
        function showCount() {
            if(a8.value.length > 0){
                b8.style.display = "none";
                ch8.style.display = "block";
            }
                if(a8.value.length == 0){
                b8.style.display = "block";
                ch8.style.display = "none";
            }
            console.log(a8.value.length);
        }
        a8.onkeyup = a8.oninput = showCount;
        a8.onpropertychange = function() {
            if (event.propertyName == "value") showCount();
        }
        a8.oncut = function() {
            setTimeout(showCount, 0); // на момент oncut значение ещё старое
    };
    }
    if (i>8) {
        function showCount() {
            if(a9.value.length > 0){
                b9.style.display = "none";
                ch9.style.display = "block";
            }
                if(a9.value.length == 0){
                b9.style.display = "block";
                ch9.style.display = "none";
            }
            console.log(a9.value.length);
        }
        a9.onkeyup = a9.oninput = showCount;
        a9.onpropertychange = function() {
            if (event.propertyName == "value") showCount();
        }
        a9.oncut = function() {
            setTimeout(showCount, 0); // на момент oncut значение ещё старое
    };
    }
    if (i>9) {
        function showCount() {
            if(a10.value.length > 0){
                b10.style.display = "none";
                ch10.style.display = "block";
            }
                if(a10.value.length == 0){
                b10.style.display = "block";
                ch10.style.display = "none";
            }
            console.log(a10.value.length);
        }
        a10.onkeyup = a9.oninput = showCount;
        a10.onpropertychange = function() {
            if (event.propertyName == "value") showCount();
        }
        a10.oncut = function() {
            setTimeout(showCount, 0); // на момент oncut значение ещё старое
    };
    }


function test_add_answer() {
    if (i>0) {
        function showCount() {
            if(a1.value.length > 0){
                b1.style.display = "none";
                ch1.style.display = "block";
            }
            if(a1.value.length == 0){
                b1.style.display = "block";
                ch1.style.display = "none";
            }
            console.log(a1.value.length);
        }
        a1.onkeyup = a1.oninput = showCount;
        a1.onpropertychange = function() {
            if (event.propertyName == "value") showCount();
        }
        a1.oncut = function() {
            setTimeout(showCount, 0); // на момент oncut значение ещё старое
      };
    }
    if (i>1) {
        function showCount() {
            if(a2.value.length > 0){
                b2.style.display = "none";
                ch2.style.display = "block";
            }
            if(a2.value.length == 0){
                b2.style.display = "block";
                ch2.style.display = "none";
                document.getElementById(ch2).checked = false ;
            }
            console.log(a2.value.length);
        }
        a2.onkeyup = a2.oninput = showCount;
        a2.onpropertychange = function() {
            if (event.propertyName == "value") showCount();
        }
        a2.oncut = function() {
            setTimeout(showCount, 0); // на момент oncut значение ещё старое
      };
    }
    if (i>2) {
        function showCount() {
            if(a3.value.length > 0){
                b3.style.display = "none";
                ch3.style.display = "block";
            }
            if(a3.value.length == 0){
                b3.style.display = "block";
                ch3.style.display = "none";
            }
            console.log(a3.value.length);
        }
        a3.onkeyup = a3.oninput = showCount;
        a3.onpropertychange = function() {
            if (event.propertyName == "value") showCount();
        }
        a3.oncut = function() {
            setTimeout(showCount, 0); // на момент oncut значение ещё старое
      };
    }
    if (i>3) {
        function showCount() {
            if(a4.value.length > 0){
                b4.style.display = "none";
                ch4.style.display = "block";
            }
            if(a4.value.length == 0){
                b4.style.display = "block";
                ch4.style.display = "none";
            }
            console.log(a4.value.length);
        }
        a4.onkeyup = a4.oninput = showCount;
        a4.onpropertychange = function() {
            if (event.propertyName == "value") showCount();
        }
        a4.oncut = function() {
            setTimeout(showCount, 0); // на момент oncut значение ещё старое
      };
    }
    if (i>4) {
        function showCount() {
            if(a5.value.length > 0){
                b5.style.display = "none";
                ch5.style.display = "block";
            }
                if(a5.value.length == 0){
                b5.style.display = "block";
                ch5.style.display = "none";
            }
            console.log(a5.value.length);
        }
        a5.onkeyup = a5.oninput = showCount;
        a5.onpropertychange = function() {
            if (event.propertyName == "value") showCount();
        }
        a5.oncut = function() {
            setTimeout(showCount, 0); // на момент oncut значение ещё старое
      };
    }
    if (i>5) {
        function showCount() {
            if(a6.value.length > 0){
                b6.style.display = "none";
                ch6.style.display = "block";
            }
                if(a6.value.length == 0){
                b6.style.display = "block";
                ch6.style.display = "none";
            }
            console.log(a6.value.length);
        }
        a6.onkeyup = a6.oninput = showCount;
        a6.onpropertychange = function() {
            if (event.propertyName == "value") showCount();
        }
        a6.oncut = function() {
            setTimeout(showCount, 0); // на момент oncut значение ещё старое
      };
    }
    if (i>6) {
        function showCount() {
            if(a7.value.length > 0){
                b7.style.display = "none";
                ch7.style.display = "block";
            }
                if(a7.value.length == 0){
                b7.style.display = "block";
                ch7.style.display = "none";
            }
            console.log(a7.value.length);
        }
        a7.onkeyup = a7.oninput = showCount;
        a7.onpropertychange = function() {
            if (event.propertyName == "value") showCount();
        }
        a7.oncut = function() {
            setTimeout(showCount, 0); // на момент oncut значение ещё старое
      };
    }
    if (i>7) {
        function showCount() {
            if(a8.value.length > 0){
                b8.style.display = "none";
                ch8.style.display = "block";
            }
                if(a8.value.length == 0){
                b8.style.display = "block";
                ch8.style.display = "none";
            }
            console.log(a8.value.length);
        }
        a8.onkeyup = a8.oninput = showCount;
        a8.onpropertychange = function() {
            if (event.propertyName == "value") showCount();
        }
        a8.oncut = function() {
            setTimeout(showCount, 0); // на момент oncut значение ещё старое
      };
    }
    if (i>8) {
        function showCount() {
            if(a9.value.length > 0){
                b9.style.display = "none";
                ch9.style.display = "block";
            }
                if(a9.value.length == 0){
                b9.style.display = "block";
                ch9.style.display = "none";
            }
            console.log(a9.value.length);
        }
        a9.onkeyup = a9.oninput = showCount;
        a9.onpropertychange = function() {
            if (event.propertyName == "value") showCount();
        }
        a9.oncut = function() {
            setTimeout(showCount, 0); // на момент oncut значение ещё старое
      };
    }
    if (i>9) {
        function showCount() {
            if(a10.value.length > 0){
                b10.style.display = "none";
                ch10.style.display = "block";
            }
                if(a10.value.length == 0){
                b10.style.display = "block";
                ch10.style.display = "none";
            }
            console.log(a10.value.length);
        }
        a10.onkeyup = a9.oninput = showCount;
        a10.onpropertychange = function() {
            if (event.propertyName == "value") showCount();
        }
        a10.oncut = function() {
            setTimeout(showCount, 0); // на момент oncut значение ещё старое
      };
    }
}
