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

var titleText = [ "K", "KO", "KON", "KONR", "KONRA", "KONRAD", "KONRAD.", "KONRAD.T", "KONRAD.TK","KONRAD.T", "KONRAD.", "KONRAD", "KONRA", "KONR", "KON", "KO", "K" ];

function loop(){

    document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}
