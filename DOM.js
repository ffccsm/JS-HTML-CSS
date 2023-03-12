
var myVar = document.querySelector(".my-div");

var p1 = myVar.children[0];
p1.textContent = location.href;

var p2 = myVar.children[1];
p2.textContent = location.host;


var p3 = myVar.children[2];
p3.textContent = location.port;

var p4 = myVar.children[3];
p4.textContent = location.pathname;


var p1 = myVar.children[0];
p1.textContent = location.href;


var visitButton = document.querySelector("#visit-button");

visitButton.addEventListener('click', function(){

    location.assign("https://www.google.com");



})


