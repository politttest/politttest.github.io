const databaseRef_to_questions = firebase.database().ref("/questions/").child(localStorage.id);
const databaseRef_to_results = firebase.database().ref("/results/").child(localStorage.id);
const databaseRef_to_users = firebase.database().ref("/users/");
var value, id_item_accordion = 1;

var list_with_results = document.getElementById("accordionFlushExample");

databaseRef_to_questions.orderByKey().on('value', snapshot => {
snapshot.forEach(function (childSnapshot) {
    value = childSnapshot.val();
    //console.log(value);

    var accordionItem = document.createElement("div");
    accordionItem.className = "accordion-item";
    var accordionHeader = document.createElement("h2");
    accordionHeader.className = "accordion-header";
    accordionHeader.id = "flush-heading" + id_item_accordion;
    var accordionButton = document.createElement("button");
    accordionButton.className = "accordion-button collapsed";
    accordionButton.innerHTML = value.text;
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
    RowLg3.className = "col-lg-3 col-md-5 text-center";
    var RowLg3DisplayName = document.createElement("p");
    RowLg3DisplayName.id = "DisplayName" + id_item_accordion;
    var RowLg9 = document.createElement("div");
    RowLg9.className = "col-lg-9 col-md-7";
    RowLg9.id = "RowLg9_" + id_item_accordion;

    list_with_results.appendChild(accordionItem);
    accordionItem.appendChild(accordionHeader);
    accordionItem.appendChild(accordionCollapse);
    accordionHeader.appendChild(accordionButton);
    accordionCollapse.appendChild(accordionBody);
    accordionBody.appendChild(accordionContainer);
    accordionContainer.appendChild(accordionRow);
    accordionRow.appendChild(RowLg3);   
    RowLg3.appendChild(RowLg3DisplayName);
    accordionRow.appendChild(RowLg9);
 
    id_item_accordion++;
})})

arr_id = [];
arr_displayName = [];
databaseRef_to_users.orderByKey().on('value', snapshot => {
    snapshot.forEach(function (childSnapshot) {
        value = childSnapshot.val();
        arr_id.push(value.id);
        arr_displayName.push(value.displayName);
    })})

var i = 0;
var search = false;
databaseRef_to_results.orderByKey().on('value', snapshot => {
    snapshot.forEach(function (childSnapshot) {
        value_results = childSnapshot.val();
        //console.log(value_results);
        test_userID = value_results.userId; 
        console.log(test_userID)
        /*console.log(arr_id)
        console.log(arr_displayName)*/
        search = false;
        while(search != true){
            if (test_userID == arr_id[i]){
                localStorage.name_of_tester = arr_displayName[i];
                console.log(localStorage.name_of_tester)
                /*console.log("test_userID " + test_userID)
                console.log("arr_id[i] " + arr_id[i] )*/
                i = 0;
                search = true;
            }   
            else {
                i++;  
            }
        }
        
})})