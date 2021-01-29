const databaseRef = firebase.database().ref("/classes/");

var list_with_classes = document.getElementById("list_with_classes");
var auto_k = 1;
databaseRef.orderByKey().on('value', snapshot => {
    snapshot.forEach(function (childSnapshot) {
        value = childSnapshot.val();
        var container_of_classes = document.createElement("div");
        container_of_classes.className = "container_of_classes";
        container_of_classes.id = "id_of_the_class" + auto_k;
        var name_of_the_class = document.createElement("p");
        name_of_the_class.className = "name_of_the_class";
        name_of_the_class.innerHTML = value.title;
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
        button_of_the_class.innerHTML = "-";
        button_of_the_class.onclick = "delete_the_classes();";
        var id_of_the_class = document.createElement("p");
        id_of_the_class.className = "id_of_the_class";
        id_of_the_class.innerHTML = value.id;

        list_with_classes.appendChild(container_of_classes);
        container_of_classes.appendChild(name_of_the_class);
        container_of_classes.appendChild(count_people_of_the_class);
        container_of_classes.appendChild(button_of_the_class);
        container_of_classes.appendChild(id_of_the_class);
        auto_k +=1;
})})



function to_MainMenu(){
    document.location.href = "MainMenu.html"
}

function enter_to_class(){
    document.querySelector('#list_with_classes').addEventListener('click', function(e){ // Вешаем обработчик клика на UL, не LI
    //Получили ID, т.к. в e.target содержится элемент по которому кликнули
    var way = document.getElementById(e.target.id)
    console.log(way);
    /*console.log("firstChild: " + way);
    console.log("firstChild.nextSibling: " + way.firstChild.nextSibling);
    var way_to_id_to_class = way.firstChild.nextSibling.nextSibling.nextSibling.textContent;
    console.log(way_to_id_to_class);
    localStorage.id_of_class = way_to_id_to_class;
    document.location.href = "update_test.html";})*/
})}