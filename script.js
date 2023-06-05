// DOM manipulation (Document Object Model)
// Document.getElementById

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
        Document.getElementById("myImg").src=displayData.image;
    }
}