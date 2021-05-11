function Go_To_PlayMarket(){
    document.location.href = "https://play.google.com/store/apps/details?id=com.m21droid.politest"
}
function clear_answer_in_the_write_test() {
    document.forms.test_answer.reset();
}
function off_all(){
    document.getElementById("child__auth").className = "none"
    document.getElementById("child__main_menu").className = "none"
    document.getElementById("child__tests").className = "none"
    document.getElementById("child__write_test").className = "none"
    document.getElementById("teacher__auth").className = "none"
    document.getElementById("teacher__main_menu").className = "none"
    document.getElementById("teacher__list_with_questions").className = "none"
    document.getElementById("teacher__to_list_with_test").className = "none"
    document.getElementById("teacher__update_test").className = "none"
    document.getElementById("teacher__answer").className = "none"
    document.getElementById("teacher__list_with_testers").className = "none"
    document.getElementById("teacher__list_with_results").className = "none"
}
function Restart(){
    setTimeout(() => {
        clear_answer_in_the_write_test();
        document.getElementById("choice").className = "block"
        off_all();
    }, 200);
}
function child(){
    document.getElementById("choice").className = "none"
    document.getElementById("child__auth").className = "block"
}
function child__connect(){
    document.getElementById("child__auth").className = "none"
    document.getElementById("child__main_menu").className = "block"
}
function child__go_out(){
    document.getElementById("child__auth").className = "block"
    document.getElementById("child__main_menu").className = "none"
    document.getElementById("teacher__main_menu").className = "none"
}

function child__write_test(){
    document.getElementById("child__tests").className = "none"
    document.getElementById("child__write_test").className = "block"
}
function child__to_write_test(){
    document.getElementById("child__main_menu").className = "none"
    document.getElementById("child__tests").className = "block"
}
function child__test_passed(){
    var x = document.getElementById("snackbar_first");
    var y = document.getElementById("snackbar_second")
    y.className = ""
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function child__test_banned(){
    var y = document.getElementById("snackbar_first")
    y.className = ""
    var x = document.getElementById("snackbar_second");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}

var dialog = document.querySelector('dialog');
    document.querySelector('#openDialog').onclick = function() {
        dialog.show(); // Показываем диалоговое окно
}
    document.querySelector('#closeDialog').onclick = function() {
        dialog.close(); // Прячем диалоговое окно
}
function end_the_test(){
    dialog.close();
    document.getElementById("child__write_test").className = "none"
    clear_answer_in_the_write_test();
    document.getElementById("child__tests").className = "block"
}
function teacher(){
    document.getElementById("choice").className = "none"
    document.getElementById("teacher__auth").className = "block"
}
function teacher__connect(){
    document.getElementById("teacher__auth").className = "none"
    document.getElementById("teacher__main_menu").className = "block"
}
function teacher__to_list_with_test(){
    document.getElementById("teacher__main_menu").className = "none"
    document.getElementById("teacher__to_list_with_test").className = "block"
}
function teacher__test_banned(){
    var x = document.getElementById("snackbar_third");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function teacher__test_ban(){
    var x = document.getElementById("snackbar_zero");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function teacher__answer_banned(){
    var x = document.getElementById("snackbar_forth");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function delete_test(){
    var x = document.getElementById("snackbar_fifth");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function teacher__to_list_with_update(){
    delete_test(); //так как вызывается один и тот же элемент, я объединил
}
function teacher__update_test(){
    document.getElementById("teacher__to_list_with_test").className = "none"
    document.getElementById("teacher__update_test").className = "block"
    document.getElementById("teacher__list_with_testers").className = "none"
}
function teacher__to_list_with_questions(){
    document.getElementById("teacher__update_test").className = "none"
    document.getElementById("teacher__list_with_questions").className = "block"
}
function teacher__to_answer(){
    document.getElementById("teacher__list_with_questions").className = "none"
    document.getElementById("teacher__answer").className = "block"
}
function teacher__to_list_with_testers(){
    document.getElementById("teacher__update_test").className = "none"
    document.getElementById("teacher__list_with_testers").className = "block"
}
function teacher__to_list_with_marks(){
    document.getElementById("teacher__update_test").className = "none"
    document.getElementById("teacher__list_with_results").className = "block"
}
function teacher__button_question(){
    var x = document.getElementById("snackbar_sixth");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function teacher__button_question2(){
    var x = document.getElementById("snackbar_seventh");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function teacher__to_create_test(){
    var x = document.getElementById("create_test");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}