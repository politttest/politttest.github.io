const databaseRef_to_answers = firebase.database().ref("/answers/").child(localStorage.id);
const databaseRef_to_results = firebase.database().ref("/results/").child(localStorage.id);
const databaseRef_to_users = firebase.database().ref("/users/");
var value, id_item_accordion = 1, time_arr_with_answers = [];

var list_with_results = document.getElementById("accordionFlushExample");

/*function create_accordion(){*/

    databaseRef_to_answers.orderByKey().on('value', snapshot => {
    snapshot.forEach(function (childSnapshot) {
        value = childSnapshot.val();
        arr_with_answers = value.answers;
        //console.log(value);

        var accordionItem = document.createElement("div");
        accordionItem.className = "accordion-item";
        var accordionHeader = document.createElement("h2");
        accordionHeader.className = "accordion-header";
        accordionHeader.id = "flush-heading" + id_item_accordion;
        var accordionButton = document.createElement("button");
        accordionButton.className = "accordion-button collapsed";
        var accordionButtonContainer = document.createElement("div")
        accordionButtonContainer.className = "container"
        var accordionButtonQuestion = document.createElement("div")
        accordionButtonQuestion.className = "row"
        accordionButtonQuestion.innerHTML = value.text;
        var accordionButtonAnswers = document.createElement("div")
        accordionButtonAnswers.className = "row m-2"
        accordionButtonAnswers.style.textAlign = "left";
        for(var g = 0; g < arr_with_answers.length; g++){
            time_arr_with_answers.push(arr_with_answers[g].text + "<br>")
        }
        accordionButtonAnswers.innerHTML = time_arr_with_answers;
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
        RowLg3DisplayName.innerHTML = "test"
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
    
        /*console.log(arr_with_answers)
        console.log(arr_with_answers.length)*/


        id_item_accordion++;
        time_arr_with_answers = [];
    })})
//}

var 
    count_user = 0,
    i = 0, 
    id_item,
    search = false,
    arr_user_name_with_results = [],
    arr_user_id_with_results = [],
    arr_displayName = [],
    arr_id = [],
    count_user_in_results = 0,
    list_with_name_students = document.getElementById("list_with_name_students");


databaseRef_to_users.orderByKey().on('value', snapshot => {  
    snapshot.forEach(function (childSnapshot) {
        value = childSnapshot.val();
        arr_id.push(value.id);
        arr_displayName.push(value.displayName);
        //console.log(arr_displayName)
        count_user++;
})}) 

databaseRef_to_results.orderByKey().on('value', snapshot => {
    snapshot.forEach(function (childSnapshot) {
        value_results = childSnapshot.val();
        //console.log(value_results);
        test_userID = value_results.userId; 
        /*console.log(test_userID)
        console.log(arr_id)
        console.log(arr_displayName)*/
        search = false;
        id_item = 1;
        while(search != true){
            if (test_userID == arr_id[i]){
                localStorage.name_of_tester = arr_displayName[i];
                localStorage.id_of_tester = arr_id[i];
                /*console.log("test_userID " + test_userID)
                console.log("arr_id[i] " + arr_id[i] )*/
                i = 0;
                search = true;
            }   
            else {
                i++;  
            }
        }
        arr_user_name_with_results.push(localStorage.name_of_tester);
        arr_user_id_with_results.push(localStorage.id_of_tester);
        count_user_in_results++;
})})

setTimeout(() => {
    for(var k = 0; k < count_user_in_results; k++){
        var li = document.createElement("li");
        li.id = "li"+k;
        var dropdownP = document.createElement("p")
        dropdownP.id = "p" + k;
        dropdownP.className = "m-0"
        var dropdownItem = document.createElement("a");
        dropdownItem.id = "a"+k;
        //console.log(dropdownItem)
        dropdownItem.className = "dropdown-item pt-0 pb-0";
        dropdownItem.type = "button";
        dropdownItem.setAttribute("onclick", "load_answers_in_the_list();");
        dropdownItem.innerHTML = arr_user_name_with_results[k]
        var id_of_tester_with_results = document.createElement("span");
        id_of_tester_with_results.style.fontSize = "0px";
        id_of_tester_with_results.innerHTML = arr_user_id_with_results[k];
        list_with_name_students.appendChild(li)
        li.appendChild(dropdownP)
        dropdownP.appendChild(dropdownItem)
        dropdownP.appendChild(id_of_tester_with_results)
    }
}, 4000);

function load_answers_in_the_list(){
    document.querySelector('#list_with_name_students').addEventListener('click', function(e){ // Вешаем обработчик клика на UL, не LI
        //Получили ID, т.к. в e.target содержится элемент по которому кликнули
        var way = document.getElementById(e.target.id)
        setTimeout(() => {
            console.log("way: "+ way)
        }, 100);
        
        localStorage.name_of_one_user = way.value;
        localStorage.id_of_one_user - way.nextSibling.value;
    //create_accordion();
    for (var o = 1; o < id_item_accordion; o++) {
        var time_one_accordion = document.getElementById("DisplayName" + o);
        console.log("o: " + o)
        console.log(time_one_accordion);
        console.log("localStorage.name_of_one_user: " + localStorage.name_of_one_user)
        console.log("way.value: " + way.value)
        
        time_one_accordion.innerHTML = localStorage.name_of_one_user;
    }})
    
}
