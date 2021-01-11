const databaseRef = firebase.database().ref("/tests/");

var value, id_of_the_test, klass_of_the_test, name_of_the_test, subject_of_the_test, time_of_the_test;
var i = 0;

var menu = document.getElementById("body_on_tests");
databaseRef.orderByKey().on('value', snapshot => {
    
    snapshot.forEach(function (childSnapshot) {

        value = childSnapshot.val();
        id_of_the_test = value.id;                  //id теста
        klass_of_the_test = value.klass;            //номер класса
        name_of_the_test = value.name_of_test;      //название теста
        subject_of_the_test = value.subject;        //предмет теста
        time_of_the_test = value.time;              //время теста
        i += 1;

        var block = document.createElement("div");
        block.className = "main_block";
        var a = document.createElement("a");
        a.className = "block_form_for_test";
        a.href = "MainMenu.html";
        var div = document.createElement("div");
        div.className = "form_for_test";
        var p_1 = document.createElement("p");
        p_1.className = "name_of_test";
        p_1.innerHTML = name_of_the_test;
        var p_2 = document.createElement("p");
        p_2.className = "klass_of_test";
        p_2.innerHTML = klass_of_the_test;
        var p_3 = document.createElement("p");
        p_3.className = "subject_of_test";
        p_3.innerHTML = subject_of_the_test;
        var p_4 = document.createElement("p");
        p_4.className = "time_of_test";
        p_4.innerHTML = "Час проходження тесту " + time_of_the_test + " хвилин";
       
        block.appendChild(a)
        a.appendChild(div);
        div.appendChild(p_1);
        div.appendChild(p_2);
        div.appendChild(p_3);
        div.appendChild(p_4);
        menu.appendChild(block);



    });});
        if(i == 0) {
            var cen = document.createElement("center")
            cen.className = "center_for_error";
            var h = document.createElement("h2")
            h.innerHTML = "На жаль, зараз тестів немає."
            
            console.log("1231");
            menu.appendChild(cen);
            cen.appendChild(h);
        }