/* Название теста к которому добавляем вопросы */
var qst = localStorage.name;
console.log(qst);
document.getElementById("ntfwcq").textContent = qst;

/* Возвращение на страницу с тестами */
function to_tests(){
    document.location.href = "update_test.html";
};

/* Создать вопрос */
function add(){
    document.location.href = "add_question.html";
}