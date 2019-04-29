"use script";

var gyphy_form= document.querySelector("#giphy_form");
var display_gif= document.querySelector("#gif");
var gif_button= document.querySelector("#gif_button");
var word="";
function apiGiphy(){

    var key= "yRjQ2HNxGoo1pFY2xbUjoBTcasNr8pun";
    word= gyphy_form.elements.word.value;

    fetch("http://api.giphy.com/v1/gifs/search?api_key="+key+"&q="+word)

        .then(function(response) {
            return response.json();
        })
        .then(function(response) {

            for (var i = 0; i < 10; i++) {
                display_gif.innerHTML += '<img src="' + response.data[i].images.downsized.url + '" class="gif_img">';
            }
        });
}
function onKeyDown(event) {

    if(event.key=="Enter" || event.which==13){
        apiGiphy();
    }
}

window.addEventListener("keydown", onKeyDown);
gif_button.addEventListener("click", apiGiphy);
