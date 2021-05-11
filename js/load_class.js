const databaseRef = firebase.database().ref("/classes/");

var list_with_classes = document.getElementById("list_with_classes");
var auto_k = 1;
var infoOfClasses = [];
var listWithAllUsers = [];
var listWithSelectedUsersInClass;


databaseRef.orderByKey().on('value', snapshot => {

    info_of_classes = snapshot;
    infoOfClasses = info_of_classes.val();
    console.log(infoOfClasses)

    snapshot.forEach(function (childSnapshot) {
        value = childSnapshot.val();
        var container_of_classes = document.createElement("div");
        container_of_classes.className = "container_of_classes";
        container_of_classes.id = "id_of_the_class" + auto_k;
        var name_of_the_class = document.createElement("button");
        name_of_the_class.className = "name_of_the_class";
        name_of_the_class.innerHTML = value.title;
        name_of_the_class.setAttribute("data-bs-toggle", "modal")
        name_of_the_class.setAttribute("data-bs-target", "#staticBackdrop1")
        name_of_the_class.setAttribute("type", "button")
        name_of_the_class.setAttribute("onclick", "enter_to_class()")
        name_of_the_class.setAttribute("style", "cursor:pointer;")
        name_of_the_class.setAttribute
        name_of_the_class.id = "name" + auto_k;
        var count_people_of_the_class = document.createElement("p");
        count_people_of_the_class.className = "count_people_of_the_class";
        if (value.users) {
        count_people_of_the_class.innerHTML = value.users.length + " учнів";
        }
        else{
        count_people_of_the_class.innerHTML = "В класі немає учнів"
        }
        var button_of_the_class = document.createElement("button");
        button_of_the_class.className = "button_of_the_class";
        button_of_the_class.onclick = "delete_the_classes();";
        var span_in_button_of_the_class = document.createElement("span")
        span_in_button_of_the_class.innerHTML = "-"
        var id_of_the_class = document.createElement("p");
        id_of_the_class.className = "id_of_the_class";
        id_of_the_class.innerHTML = value.id;

        list_with_classes.appendChild(container_of_classes);
        container_of_classes.appendChild(name_of_the_class);
        container_of_classes.appendChild(count_people_of_the_class);
        container_of_classes.appendChild(button_of_the_class);
        button_of_the_class.appendChild(span_in_button_of_the_class);
        container_of_classes.appendChild(id_of_the_class);
        auto_k +=1;
})})


const databaseRefToUsers = firebase.database().ref("/users/");
var auto_block = 1;
var body_for_children = document.getElementById("list_with_users");
    databaseRefToUsers.orderByKey().on('value', snapshot => {
        snapshot.forEach(function (childSnapshot) {
            value = childSnapshot.val();
            var name_ch = value.displayName;
            var email_ch = value.email;
            var id_ch = value.id;
            listWithAllUsers.push(value.id);
            var block_of_ch = document.createElement("div");
            block_of_ch.className = "block_of_children";
            block_of_ch.id = "user" + auto_block;
            var name_of_ch = document.createElement("p");
            name_of_ch.className = "name_of_children";
            name_of_ch.innerHTML = name_ch;
            name_of_ch.id = "name" + auto_block;
            var email_of_ch = document.createElement("p");
            email_of_ch.className = "email_of_children";
            email_of_ch.innerHTML = email_ch;
            var id_of_ch = document.createElement("p");
            id_of_ch.className = "id_of_children";
            id_of_ch.innerHTML = id_ch;
            var span_of_ch_delete = document.createElement("span");
            span_of_ch_delete.innerHTML = "&#45;"
            var bttn_of_ch_delete = document.createElement("button");
            bttn_of_ch_delete.className = "button_on_the_children delete_the_child"
            //bttn_of_ch_delete.onclick = delete_the_children_from_DB();
            var span_of_ch_add = document.createElement("span");
            span_of_ch_add.innerHTML = "&#10003;"
            /*var bttn_of_ch_add = document.createElement("button");
            bttn_of_ch_add.className = "button_on_the_children add_the_child"*/

            body_for_children.appendChild(block_of_ch);
            block_of_ch.appendChild(name_of_ch);
            block_of_ch.appendChild(email_of_ch);
            block_of_ch.appendChild(id_of_ch);
            block_of_ch.appendChild(bttn_of_ch_delete);
            //block_of_ch.appendChild(bttn_of_ch_add);
            bttn_of_ch_delete.appendChild(span_of_ch_delete);
            //bttn_of_ch_add.appendChild(span_of_ch_add);
            auto_block++;
})})


function to_MainMenu(){
    document.location.href = "MainMenu.html"
}



function enter_to_class(){
    document.querySelector('#list_with_classes').addEventListener('click', function(e){ // Вешаем обработчик клика на UL, не LI
    //Получили ID, т.к. в e.target содержится элемент по которому кликнули
    var way = document.getElementById(e.target.id)
    document.getElementById("staticBackdropLabel1").innerHTML = way.textContent
    var way_to_id_to_class = way.nextSibling.nextSibling.nextSibling.textContent;
    listWithSelectedUsersInClass = infoOfClasses[way_to_id_to_class].users;
    console.log(listWithSelectedUsersInClass)
    
    
    //setTimeout(() => {
        //console.log(listWithAllUsers)
        console.log(document.getElementById("list_with_users"));  
        for(var i = 0; i < listWithSelectedUsersInClass.length; i++){
            //console.log(i)
            var timeIdOfTrueUser = listWithAllUsers.indexOf(listWithSelectedUsersInClass[i]) + 1;
            var timeBlockOfTrueUser = document.getElementById("user" + timeIdOfTrueUser);
            var timeBlockOfTrueUserButton = timeBlockOfTrueUser.childNodes[0].nextSibling.nextSibling.nextSibling;
            //console.log(timeBlockOfTrueUser)
            timeBlockOfTrueUser.setAttribute("style", "border: 1px solid midnightblue;")
            //console.log(timeBlockOfTrueUser)
            timeBlockOfTrueUserButton.className = "button_on_the_children add_the_child"
            timeBlockOfTrueUserButton.innerHTML = "&#10003;"
        }
    //}, 500);

    
})}

function clearBlockWithUsers(){
    console.log("<<<<")
    for(var i = 0; i < listWithAllUsers.length; i++){
        console.log(listWithAllUsers.length)
        var timeId = i+1;
        var timeBlockOfTrueUser = document.getElementById("user" + timeId);
        console.log(timeBlockOfTrueUser)
        var timeBlockOfTrueUserButton = timeBlockOfTrueUser.childNodes[0].nextSibling.nextSibling.nextSibling;
        timeBlockOfTrueUser.setAttribute("style", "border: 1px solid lightskyblue;")
        timeBlockOfTrueUserButton.className = "button_on_the_children delete_the_child"
        timeBlockOfTrueUserButton.innerHTML = "&#45;"
    }
    listWithSelectedUsersInClass = "";
    listWithAllUsers = [];
}