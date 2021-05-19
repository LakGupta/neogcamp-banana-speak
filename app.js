var input = document.querySelector("#txt-input");
var btnTranslate = document.querySelector("#btn-translate");
var outputDiv = document.querySelector("#txt-output");
var url = "https://api.funtranslations.com/translate/minion.json"
function convertURL(text) {
    return url + "?" + "text=" + text;
}
function clickHandler() {
    var inputText = input.value;
    fetch(convertURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
        })
};
btnTranslate.addEventListener("click", clickHandler)