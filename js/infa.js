// Передает данные об аккаунте на Главную страницу (фото, имя/фамилия, 3 кнопки)
// document.getElementById('img_google').src = localStorage.getItem('photoURL_google');
document.getElementById('email_google').textContent = localStorage.getItem('email_google');
document.getElementById('name_google').textContent = localStorage.getItem('displayName_google');

function to_tests(){
    document.location.href = "tests.html";
}

function to_create_test(){
    document.location.href = "create_test.html"
}