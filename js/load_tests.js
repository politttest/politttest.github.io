const databaseRef_tests = firebase.database().ref("/tests/");

var value, id_of_the_test, klass_of_the_test, name_of_the_test, subject_of_the_test, time_of_the_test;
var i = 0;
var j = 0;


var cen = document.createElement("center")
cen.className = "center_for_error";
var h = document.createElement("h2")
h.innerHTML = "На жаль, зараз тестів немає."



var body_wihout_button_to_MainMenu = document.getElementById("body_on_tests");
databaseRef_tests.orderByKey().on('value', snapshot => {
    
    snapshot.forEach(function (childSnapshot) {

        value = childSnapshot.val();
        id_of_the_test = value.id;                  //id теста
        klass_of_the_test = value.c1ass;            //номер класса
        name_of_the_test = value.title;             //название теста
        subject_of_the_test = value.subject;        //предмет теста
        time_of_the_test = value.time;              //время теста
        i += 1;
        j += 1;

 
        var id_of_block_the_test;
        id_of_block_the_test = "Test" + i;
        var block_of_all_tests = document.createElement("div");
        block_of_all_tests.className = "main_block";
        var a_on_block_of_the_test = document.createElement("a");
        a_on_block_of_the_test.className = "block_form_for_test";
        a_on_block_of_the_test.onclick = ID();
        var block_the_test = document.createElement("div");
        block_the_test.className = "form_for_test";
        var title = document.createElement("a");
        title.className = "name_of_test";
        title.innerHTML = name_of_the_test;
        title.id = id_of_block_the_test;
        var cl1ss = document.createElement("p");
        cl1ss.className = "klass_of_test";
        cl1ss.innerHTML = klass_of_the_test + "-й клас";
        var subject = document.createElement("p");
        subject.className = "subject_of_test";
        subject.innerHTML = subject_of_the_test;
        var time = document.createElement("p");
        time.className = "time_of_test";
        if (time_of_the_test == null) {
            time.innerHTML = "Час проходження тесту не обмежений"
        }
        else {
            time.innerHTML = "Час проходження тесту " + time_of_the_test + " хвилин";
            time.value = time_of_the_test;
        }
        var id = document.createElement("p");
        id.className = "id_of_test";
        id.innerHTML = id_of_the_test;

        block_of_all_tests.appendChild(a_on_block_of_the_test)
        a_on_block_of_the_test.appendChild(block_the_test);
        block_the_test.appendChild(title);
        block_the_test.appendChild(cl1ss);
        block_the_test.appendChild(subject);
        block_the_test.appendChild(time);
        block_the_test.appendChild(id);
        body_wihout_button_to_MainMenu.appendChild(block_of_all_tests);
        
    });});

function ID(){
    document.querySelector('#body_on_tests').addEventListener('click', function(e){ // Вешаем обработчик клика на UL, не LI
    //Получили ID, т.к. в e.target содержится элемент по которому кликнули
    var way = document.getElementById(e.target.id)
    var way_to_id = way.nextSibling.nextSibling.nextSibling.nextSibling.textContent;
    console.log(way_to_id);
    sessionStorage.id = way_to_id;
    sessionStorage.name = way.textContent;
    sessionStorage.cl1ss = way.nextSibling.textContent;
    sessionStorage.subject = way.nextSibling.nextSibling.textContent;
    sessionStorage.time = way.nextSibling.nextSibling.nextSibling.value;
    document.location.href = "update_test.html";})
}

if(i == 0) {
    console.log("1231");
    body_wihout_button_to_MainMenu.appendChild(cen);
    cen.appendChild(h);
}
if(j == 0 ){
    console.log("12")
    cen.style.display = "none";
}