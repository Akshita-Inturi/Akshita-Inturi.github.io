var userinfo = {name : "", image : "", username : ""};
var changePic = function() {
    fetch('https://randomuser.me/api').then((response) => response.json()).then((data) => {
        userinfo.name = data.results[0].name.first;
        userinfo.image = data.results[0].picture.large;
        userinfo.username = data.results[0].login.username;

        document.getElementById("myImg").src = userinfo.image;
        document.getElementById("myName").innerHTML = userinfo.name;
        document.getElementById("desg").innerHTML = userinfo.username;
    });
}