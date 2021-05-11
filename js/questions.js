const databaseRef_answers = firebase.database().ref("/answers/").child(sessionStorage.id);
var index_question = 1;
databaseRef_answers.orderByKey().on('value', snapshot => {
    
    snapshot.forEach(function (childSnapshot) {
        value = childSnapshot.val()
        console.log(value);
        console.log(value.text);
        var block_of_all_quest = document.getElementById("block_of_all_questions");
        /*var block_of_one_quest__link = document.createElement("a");
        block_of_one_quest__link.setAttribute("type","button")*/
        var block_of_one_quest = document.createElement("div");
        block_of_one_quest.className = "quest";
        block_of_one_quest.id = "quest" + index_question;
        var number_and_button_of_one_quest = document.createElement("div");
        number_and_button_of_one_quest.className = "up_quest";
        var number_of_one_quest = document.createElement("p");
        number_of_one_quest.className = "number";
        number_of_one_quest.innerHTML = "Питання " + index_question;
        var delete_of_one_quest = document.createElement("button");
        delete_of_one_quest.className = "delete_quest";
        var sp = document.createElement("span");
        sp.innerHTML = "-";
        var content_of_one_quest = document.createElement("a");
        content_of_one_quest.className = "content";
        content_of_one_quest.id = "answ" + index_question;
        content_of_one_quest.innerHTML = value.text;
        content_of_one_quest.setAttribute("onclick","to_question();")
        content_of_one_quest.setAttribute("style","cursor:pointer;")
        var mark_of_one_quest = document.createElement("p");
        mark_of_one_quest.className = "mark";
        mark_of_one_quest.innerHTML = "Оцінка за правильну відповідь: " + value.mark;
        var id_of_one_quest = document.createElement("p");
        id_of_one_quest.className = "id_quest";
        id_of_one_quest.innerHTML = value.id;

        block_of_all_quest.appendChild(block_of_one_quest);
        block_of_one_quest.appendChild(number_and_button_of_one_quest);
        number_and_button_of_one_quest.appendChild(number_of_one_quest);
        number_and_button_of_one_quest.appendChild(delete_of_one_quest);
        delete_of_one_quest.appendChild(sp);
        block_of_one_quest.appendChild(content_of_one_quest);
        block_of_one_quest.appendChild(mark_of_one_quest);
        block_of_one_quest.appendChild(id_of_one_quest);

        index_question += 1;
    })})


    
/* Название теста к которому добавляем вопросы */
var qst = sessionStorage.name;
console.log(qst);
document.getElementById("ntfwcq").textContent = qst;

/* Возвращение на страницу с тестами */
function to_tests(){
    document.location.href = "update_test.html";
};

/* Создать вопрос */
function add(){
    sessionStorage.key_answer = "";
    document.location.href = "add_question.html";
}

function to_question(){
    document.querySelector('#block_of_all_questions').addEventListener('click', function(e){ // Вешаем обработчик клика на UL, не LI
    //Получили ID, т.к. в e.target содержится элемент по которому кликнули
    var way = document.getElementById(e.target.id)
    var key_answer = way.nextSibling.nextSibling.textContent
    sessionStorage.key_answer = key_answer;
    console.log(sessionStorage.key_answer)
    document.location.href = "add_question.html"
})}
