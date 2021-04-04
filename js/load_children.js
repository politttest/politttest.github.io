const databaseRef = firebase.database().ref("/users/");
var auto_block = 1;
var body_for_children = document.getElementById("list_with_users");
databaseRef.orderByKey().on('value', snapshot => {
    snapshot.forEach(function (childSnapshot) {
        value = childSnapshot.val();
        var name_ch = value.displayName;
        var email_ch = value.email;
        var id_ch = value.id;
        var block_of_ch = document.createElement("div");
        block_of_ch.className = "block_of_children";
        block_of_ch.id = "block" + auto_block;
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
        bttn_of_ch_delete.onclick = delete_the_children_from_DB();
        var span_of_ch_add = document.createElement("span");
        span_of_ch_add.innerHTML = "&#10003;"
        var bttn_of_ch_add = document.createElement("button");
        bttn_of_ch_add.className = "button_on_the_children add_the_child"

        body_for_children.appendChild(block_of_ch);
        block_of_ch.appendChild(name_of_ch);
        block_of_ch.appendChild(email_of_ch);
        block_of_ch.appendChild(id_of_ch);
        block_of_ch.appendChild(bttn_of_ch_delete);
        block_of_ch.appendChild(bttn_of_ch_add);
        bttn_of_ch_delete.appendChild(span_of_ch_delete);
        bttn_of_ch_add.appendChild(span_of_ch_add);
        auto_block++;
})})


function delete_the_children_from_DB(){
    console.log("1");
}