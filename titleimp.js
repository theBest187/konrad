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

var titleText = [ "I", "IM", "IMP", "IMPR", "IMPRE", "IMPRES", "IMPRESS", "IMPRESSU", "IMPRESSUM","IMPRESSU", "IMPRESS", "IMPRES", "IMPRE", "IMPR", "IMP", "IM", "I" ];

function loop(){

    document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}