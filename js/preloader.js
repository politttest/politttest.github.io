document.body.onload = function(){
    setTimeout(() => {
        var preloader = document.getElementById("page-preloader");
        if (!preloader.classList.contains("done")){
            preloader.classList.add("done")
        }
    }, 1500);
}