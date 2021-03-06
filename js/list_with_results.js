function to_test() {
    document.location.href = "update_test.html";
}

const databaseRef_to_answers = firebase.database().ref("/answers/").child(sessionStorage.id);
const databaseRef_to_results = firebase.database().ref("/results/").child(sessionStorage.id);
const databaseRef_to_users = firebase.database().ref("/users/");
var value, id_item_accordion = 1, time_arr_with_answers = [], arr_with_all_questions = [], arr_with_questions_one_test = [], arr_with_questions_one_test__DELETE = [], arr_with_id_true_answers = [];

var list_with_results = document.getElementById("accordionFlushExample");
var list_with_name_students = document.getElementById("list_with_name_students")

databaseRef_to_results.orderByKey().on('value', snapshot => {
    snapshot.forEach(function (childSnapshot) {
        value_results = childSnapshot.val();
        arr_with_all_questions.push(value_results);
})})

    databaseRef_to_answers.orderByKey().on('value', snapshot => {
    snapshot.forEach(function (childSnapshot) {
        value = childSnapshot.val();
        arr_with_answers = value.answers;
        arr_with_questions_one_test__DELETE.push(value)

        var accordionItem = document.createElement("div");
        accordionItem.className = "accordion-item";
        var accordionHeader = document.createElement("h2");
        accordionHeader.className = "accordion-header";
        accordionHeader.id = "flush-heading" + id_item_accordion;
        var accordionButton = document.createElement("button");
        accordionButton.className = "accordion-button collapsed text-left";
        accordionButton.id = "accordion-button" + id_item_accordion;
        var accordionButtonContainer = document.createElement("div")
        accordionButtonContainer.className = "container"
        var accordionButtonQuestion = document.createElement("div")
        accordionButtonQuestion.className = "row"
        accordionButtonQuestion.innerHTML = "<p class='fw-bold'>" + value.text + " <span class='fw-light'>(" + value.mark + "б.)<span> </p>";
        var accordionButtonAnswers = document.createElement("div")
        accordionButtonAnswers.className = "row m-2"
        accordionButtonAnswers.style.textAlign = "left";
        for(var g = 0; g < arr_with_answers.length; g++){
            answer_g = g+1;
            accordionButtonAnswers.innerHTML += "<p class='p-0 m-0' id='p_answer" +  answer_g + "'><span class='fw-bold' id='answer" + answer_g + "'>Відповідь: </span>" +  arr_with_answers[g].text + "</p>"
            //time_arr_with_answers.push("<p class='p-0 m-0'><span class='fw-bold'>Відповідь: </span>" +  arr_with_answers[g].text + "</p>")
        }
        //accordionButtonAnswers.innerHTML = time_arr_with_answers;
        accordionButton.setAttribute("type", "button");
        accordionButton.setAttribute("data-bs-toggle", "collapse");
        accordionButton.setAttribute("data-bs-target","#flush-collapse" + id_item_accordion);
        accordionButton.setAttribute("aria-expanded", "false");
        accordionButton.setAttribute("aria-controls", "flush-collapse" + id_item_accordion);

        var accordionCollapse = document.createElement("div");
        accordionCollapse.className = "accordion-collapse collapse";
        accordionCollapse.id = "flush-collapse" + id_item_accordion;
        accordionCollapse.setAttribute("aria-labelledby", "flush-heading" + id_item_accordion);
        accordionCollapse.setAttribute("data-bs-parent", "#accordionFlushExample");
        var accordionBody = document.createElement("div");
        accordionBody.className = "accordion-body"
        var accordionContainer = document.createElement("div");
        accordionContainer.className = "container"
        var accordionRow = document.createElement("div");
        accordionRow.className = "row";
        var RowLg3 = document.createElement("div");
        RowLg3.className = "col-lg-2 col-md-3 text-center";
        RowLg3.id = "RowLg3_" + id_item_accordion;
        var RowLg3DisplayName = document.createElement("p");
        RowLg3DisplayName.id = "DisplayName" + id_item_accordion;
        var RowLg9 = document.createElement("div");
        RowLg9.className = "col-lg-10 col-md-9";
        RowLg9.id = "RowLg9_" + id_item_accordion;

        list_with_results.appendChild(accordionItem);
        accordionItem.appendChild(accordionHeader);
        accordionItem.appendChild(accordionCollapse);
        accordionHeader.appendChild(accordionButton);
        accordionButton.appendChild(accordionButtonContainer);
        accordionButtonContainer.appendChild(accordionButtonQuestion);
        accordionButtonContainer.appendChild(accordionButtonAnswers);
        accordionCollapse.appendChild(accordionBody);
        accordionBody.appendChild(accordionContainer);
        accordionContainer.appendChild(accordionRow);
        accordionRow.appendChild(RowLg3);   
        RowLg3.appendChild(RowLg3DisplayName);
        accordionRow.appendChild(RowLg9);

        id_item_accordion++;
        time_arr_with_answers = [];
    })});
var count_user = 0,
    i = 0, 
    q = 1,
    id_item,
    search = false,
    arr_user_name_with_results = [],
    arr_user_id_with_results = [],
    arr_user_result_with_results = [],
    arr_with_true_answers = [], 
    arr_displayName = [],
    arr_id = [],
    arr = [],
    count_user_in_results = 0,
    list_with_name_students = document.getElementById("list_with_name_students"),
    dvoich_arr_with_true_answers = [],
    dvoich_arr = [];
    arr_with_id_true_answers_with_t = [],
    timeArrWithAnswers = [];

databaseRef_to_users.orderByKey().on('value', snapshot => {  
    snapshot.forEach(function (childSnapshot) {
        value = childSnapshot.val();
        arr_id.push(value.id);
        arr_displayName.push(value.displayName);
        count_user++;
})}) 

setTimeout(() => {
    for(var q = 0; q < arr_with_questions_one_test__DELETE.length; q++){
        var time_arr = arr_with_questions_one_test__DELETE[q].answers
        //console.log(time_arr)
        for(var qq = 0; qq < time_arr.length; qq++){
            var time_time_arr = time_arr[qq]
            //console.log(time_time_arr)
            if(time_time_arr.selected){
                dvoich_arr_with_true_answers.push(qq+1);
            }
        }
        arr_with_id_true_answers.push(dvoich_arr_with_true_answers);
        dvoich_arr_with_true_answers = [];
    }
    //console.log(arr_with_id_true_answers); //масив в идами правильных ответов
}, 2200);
 //доделать подсветку правильных ответов
function see_true_answers(){
    var button = document.getElementById("button_for_true_answers");
    if(button.className == "btn btn-outline-success mb-3"){
        console.log("true")
        for(var t = 0; t < arr_with_id_true_answers.length; t ++){
            //console.log(">>>>>>")
            arr_with_id_true_answers_with_t = arr_with_id_true_answers[t]
            for(var tt = 0; tt < arr_with_id_true_answers_with_t.length; tt++){
                //console.log("second enter to function (see_true_answers)")
                t++;
                var id_answer_from_arr = arr_with_id_true_answers_with_t[tt];
                var firstElement = document.getElementById("flush-heading" + t).children[0].childNodes[0].childNodes[0].nextSibling.childNodes[id_answer_from_arr-1]
                //console.log(firstElement)
                /*var secondElement = firstElement.getElementById("accordion-button" + 1);
                console.log(time_answer)*/
                firstElement.className += " green";
                t--;
            }
        }
        button.className = "btn btn-outline-danger mb-3"
        button.textContent = "Закрити правильні відповіді"
    }
    else{
        console.log("else")
        for(var t = 0; t < arr_with_id_true_answers.length; t ++){
            //console.log(">>>>>>")
            arr_with_id_true_answers_with_t = arr_with_id_true_answers[t]
            for(var tt = 0; tt < arr_with_id_true_answers_with_t.length; tt++){
                //console.log("second enter to function (see_true_answers)")
                t++;
                var id_answer_from_arr = arr_with_id_true_answers_with_t[tt];
                var firstElement = document.getElementById("flush-heading" + t).children[0].childNodes[0].childNodes[0].nextSibling.childNodes[id_answer_from_arr-1]
                //console.log(firstElement)
                /*var secondElement = firstElement.getElementById("accordion-button" + 1);
                console.log(time_answer)*/
                firstElement.className = "p-0 m-0";
                t--;
            }
        }
        button.className = "btn btn-outline-success mb-3"
        button.textContent = "Показати правильні відповіді"
    }
    button = ""
}

setTimeout(() => {
    for(var e = 0; e < arr_with_all_questions.length; e ++){
        //console.log(arr_with_all_questions.length)
        //console.log(arr_with_all_questions)
        test_userID = arr_with_all_questions[e].userId; 
        test_results = arr_with_all_questions[e].questions;
        //console.log(test_results);

        /*console.log(test_userID)
        console.log(arr_id)
        console.log(arr_displayName)*/
        search = false;
        id_item = 1;

        while(search != true){
            if (test_userID == arr_id[i]){
                sessionStorage.name_of_tester = arr_displayName[i];
                sessionStorage.id_of_tester = arr_id[i];
                /*console.log("test_userID " + test_userID)
                console.log("arr_id[i] " + arr_id[i] )*/
                i = 0;
                search = true;
            }   
            else {
                i++;  
            }
        }

        for(var p = 0; p < test_results.length; p++){
            time_result = test_results[p].answers;
            console.log(time_result);
            for(var pp = 0; pp < time_result.length; pp++){
                if(time_result[pp].selected){
                    dvoich_arr.push(time_result[pp].id)
                }
            }   
            arr_with_true_answers.push(dvoich_arr);
            dvoich_arr = [];
        }
        //arr_with_true_answers.push(dvoich_arr);
        console.log(arr_with_true_answers)
        arr.push(arr_with_true_answers)
        console.log(arr)
        arr_with_true_answers = [];
        //dvoich_arr = [];

        arr_user_name_with_results.push(sessionStorage.name_of_tester);
        arr_user_id_with_results.push(sessionStorage.id_of_tester);
        count_user_in_results++;
        q++;
    }
}, 2200);
        


for(var k = 0; k < count_user_in_results; k++){
    var dropdownP = document.createElement("p")
    dropdownP.className = "m-0"
    var dropdownItem = document.createElement("a");
    dropdownItem.id = "onem od"+k;
    dropdownItem.className = "dropdown-item pt-0 pb-0";
    dropdownItem.type = "button";
    dropdownItem.setAttribute("onclick", "load_answers_in_the_list();");
    /*dropdownItem.innerHTML = arr_user_name_with_results[k]*/
    var id_of_tester_with_results = document.createElement("span");
    id_of_tester_with_results.className = "f-left"
    id_of_tester_with_results.style.fontSize = "0px";
    id_of_tester_with_results.style.float = "left"
    /*id_of_tester_with_results.innerHTML = arr_user_id_with_results[k];*/
    /*list_with_name_students.appendChild(li)
    li.appendChild(dropdownP)*/
    list_with_name_students.appendChild(dropdownP);
    dropdownP.appendChild(dropdownItem)
    dropdownP.appendChild(id_of_tester_with_results)
    var answers_of_tester_with_results = document.createElement("span")
    answers_of_tester_with_results.className = "f-left"
    answers_of_tester_with_results.style.fontSize = "0px";
    answers_of_tester_with_results.style.float = "left"
    answers_of_tester_with_results.id = "results_" + k;
}

setTimeout(() => {
    for(var k = 0; k < count_user_in_results; k++){
        //var li = document.createElement("li");
        //li.id = "li"+k;
        var dropdownP = document.createElement("p")
        //dropdownP.id = "p" + k;
        dropdownP.className = "m-0"
        var dropdownItem = document.createElement("a");
        dropdownItem.id = "onem od"+k;
        dropdownItem.setAttribute("name", k);
        //console.log(dropdownItem)
        dropdownItem.className = "dropdown-item pt-0 pb-0";
        dropdownItem.type = "button";
        dropdownItem.setAttribute("onclick", "load_answers_in_the_list();");
        dropdownItem.innerHTML = arr_user_name_with_results[k]
        var id_of_tester_with_results = document.createElement("span");
        id_of_tester_with_results.className = "f-left"
        id_of_tester_with_results.style.fontSize = "0px";
        id_of_tester_with_results.style.float = "left"
        id_of_tester_with_results.innerHTML = arr_user_id_with_results[k];
        /*var answers_of_tester_with_results = document.createElement("span")
        answers_of_tester_with_results.className = "f-left"
        answers_of_tester_with_results.style.fontSize = "0px";
        answers_of_tester_with_results.style.float = "left"
        answers_of_tester_with_results.id = "results_" + k;
        answers_of_tester_with_results.innerHTML = arr[k];
        console.log(answers_of_tester_with_results)*/
        console.log(arr[k])
        list_with_name_students.appendChild(dropdownP);
        dropdownP.appendChild(dropdownItem)
        dropdownP.appendChild(id_of_tester_with_results)
        //dropdownP.appendChild(answers_of_tester_with_results);
    }
}, 3000);

function splitString(stringToSplit, separator) {
    var arrayOfTrueAnswers = stringToSplit.split(separator);
    /*console.log('Оригинальная строка: "' + stringToSplit + '"');
    console.log('Разделитель: "' + separator + '"');
    console.log('Массив содержит ' + arrayOfTrueAnswers.length + ' элементов: ' + arrayOfTrueAnswers.join(' / '));
    console.log(arrayOfTrueAnswers)*/
}


function load_answers_in_the_list(){
    document.querySelector('#list_with_name_students').addEventListener('click', function(e){ // Вешаем обработчик клика на UL, не LI
        //Получили ID, т.к. в e.target содержится элемент по которому кликнули
        var way = document.getElementById(e.target.id);
        console.log()
        sessionStorage.name_of_one_user = way.textContent;
        sessionStorage.id_of_one_user = way.nextSibling.textContent;
        var number_of_user = way.name;
        var arrWithAnswersOfUser = arr[number_of_user];
        console.log(arrWithAnswersOfUser)
        console.log(sessionStorage.name_of_one_user)
        console.log(sessionStorage.id_of_one_user)
        for (var o = 1; o < id_item_accordion; o++) {
            var time_one_accordion = document.getElementById("DisplayName" + o);
            time_one_accordion.innerHTML = sessionStorage.name_of_one_user;
        }
        console.log(arr_with_questions_one_test__DELETE)
        for (var m = 1; m <= arr_with_questions_one_test__DELETE.length; m++){ //отчистка всех ответов учеников перед тем, как загрузить новые ответы (если выбирать ученика повторно)
            document.getElementById("RowLg9_" + m).innerHTML = "";
        }
        for (var m = 1; m <= arr_with_questions_one_test__DELETE.length; m++){
            timeArrWithAnswers = arrWithAnswersOfUser[m-1]
            timeArrWithAnswers.sort();
            for(var mm = 0; mm < timeArrWithAnswers.length; mm++){
                document.getElementById("RowLg9_" + m).innerHTML += "<p class = 'p-0 m-0'>" + arr_with_questions_one_test__DELETE[m-1].answers[timeArrWithAnswers[mm]-1].text + "</p>";
                //document.getElementById("RowLg9_" + m).innerHTML += timeArrWithAnswers[mm];
            }
        } // ВЫВОД ОТВЕТОВ УЧЕНИКА В ПОЛЕ С ОТВЕТАМИ В АККОРДЕОНЕ
    })

}
