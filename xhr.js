export default function richiestaXHR(tipoRichiesta, urlRichiesta) {
    const xhr = new XMLHttpRequest();

    

    xhr.open('GET', urlAPI);
    xhr.responseType = "json";

    xhr.send();

    /* xhr.onreadystatechange = function() {
    if(xhr.readyState === XMLHttpRequest.DONE){
    const risposta = JSON.parse(xhr.response);
    console.log(risposta);
    }
    };
    */

    xhr.onerror = function () {
        console.log("Errore");
    }

    xhr.onprogress = function () {
        console.log("Gif animata");
    }

    xhr.onload = function () {
        console.log(xhr.response);
    }
}