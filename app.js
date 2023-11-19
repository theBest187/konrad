async function fetchData(){
    let response = await fetch('https://v2.jokeapi.dev/joke/Any?lang=de&blacklistFlags=sexist');
    let data = await response.json();
    if(data.type == "twopart"){
        document.getElementById('Joke').innerHTML = data.setup;
	document.getElementById('Jokeanswer').innerHTML = "";
        await delay(5000);
        document.getElementById('Jokeanswer').innerHTML = "\n" + data.delivery;
        console.log(data.setup);
        console.log(data.delivery);
    }else{
        document.getElementById('Jokeanswer').innerHTML = "";
        document.getElementById('Joke').innerHTML = data.joke;
        console.log(data.joke);
    }
    if(data.error == true){
        console.log(data);
        document.getElementById('Joke').innerHTML = "api error"
        document.getElementById('Jokeanswer').innerHTML = ""
    }
}
const delay = ms => new Promise(res => setTimeout(res, ms));
document.getElementById('b').addEventListener("click", fetchData);
fetchData();
