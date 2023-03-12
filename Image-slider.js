



var photos = ["1.jpg", "2.jpg", "3.jpg"];
var imageTag = document.querySelector("img");

count=0 ;

function next () {

    count++;

    if (count >= photos.length){
        count = 0;
        imageTag.src = photos[count];
    }

        else {

            imageTag.src = photos[count];

            
        }
    }

    




function prev () {

    count--;

    if (count <0 ){
        count = photos.length - 1 ;
        imageTag.src = photos[count];
    }

        else {

            imageTag.src = photos[count];

            
        }
    }

    
