var i = 3;
var bd_fr_nswr = document.getElementById("body_for_answer")
function add_answer(){
    i+=1;
    var blck = document.createElement("div");
    blck.className = "block_of_answer";
    var fld = document.createElement("fieldset");
    fld.className = "pole_of_answer";
    var lgnd = document.createElement("legend");
    lgnd.innerHTML = "Відповідь " + i;
    var npt = document.createElement("input");
    npt.className = "answer_on_the_question";
    npt.id = "a" + i;
    var bttn = document.createElement("button");
    bttn.className = "button_to_delete_answer";
    bttn.onclick = "delete_answer();";
    var spn = document.createElement("span");
    spn.innerHTML = "&#45;";

    bd_fr_nswr.appendChild(blck);
    blck.appendChild(fld);
    blck.appendChild(bttn);
    fld.appendChild(lgnd);
    fld.appendChild(npt);
    bttn.appendChild(spn);
}

function save_the_question(){
    
}