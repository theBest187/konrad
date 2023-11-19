if(document.addEventListener){
    document.addEventListener("DOMContentLoaded", function(){
        loaded();
    });
} else if(document.attachEvent){
    document.attachEvent("onreadystatechange", function(){
        loaded();
    });
}

function loaded(){
    
    setInterval(loop, 500);

}

var x = 0;

var titleText = [ "U", "UN", "UNL", "UNLU", "UNLUS", "UNLUST", "UNLUSTI", "UNLUSTIG", "UNLUSTIGE","UNLUSTIGE J", "UNLUSTIGE JO", "UNLUSTIGE JOK", "UNLUSTIGE JOKE", "UNLUSTIGE JOKES", "UNLUSTIGE JOKE", "UNLUSTIGE JOK", "UNLUSTIGE JO", "UNLUSTIGE J", "UNLUSTIGE", "UNLUSTIG", "UNLUSTI", "UNLUST", "UNLUS", "UNLU", "UNL", "UN", "U"];

function loop(){

    document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}
