if (sessionStorage.email_google && sessionStorage.displayName_google && sessionStorage.photoURL_google && (sessionStorage.temp.length > 1)){
    console.log("Welcome")
}
else{
    document.location.href = "index.html"
}