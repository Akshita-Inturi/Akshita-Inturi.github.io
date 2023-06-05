// DOM manipulation (Document Object Model)
// document.getElementById

var data1 = {image : "recentPic.jpeg", name : "Akshita Inturi", designation : "Student"};
var data2 = {image : "childPic.jpeg", name : "Akki Inturi", designation : "Student"};

var isData1 = true;
var displayData;

var changePic = function() {
    if(isData1) {
        displayData = data2;
        isData1 = false;
    } else {
        displayData = data1;
        isData1 = true;
        document.getElementById("myImg").src=displayData.image;
        document.getElementById("myName").innerHTML=displayData.name;
        document.getElementById("desg").innerHTML=displayData.designation;
    }
}