// Передает данные об аккаунте на Главную страницу (фото, имя/фамилия, 3 кнопки)
document.getElementById('img_google').url = localStorage.getItem('photoURL_google');
document.getElementById('email_google').textContent = localStorage.getItem('email_google');
document.getElementById('name_google').textContent = localStorage.getItem('displayName_google');