var ref = firebase.database().ref();
ref.on('child_added', function(snapshot){
        var data = snapshot.val();
});
document.getElementById("print").innerHTML = "data ;