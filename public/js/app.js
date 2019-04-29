"use script";

var sub_nav= document.getElementsByClassName("sous-menu");
for (var i=0; i<sub_nav.length; i++){
    sub_nav[i].addEventListener("click", onClickSubNav);
}
function onClickSubNav (){
    if (window.width() < 950) {
        if (this.classList.contains("is-active")) {
            this.classList.remove("is-active");
        }
    }
    else {
        this.classList.add("is-active");
    }
}
//addressbook
var formulaire = document.querySelector(" #form_address_book");
var newContact= document.querySelector("#newContact");
var deleteAll= document.querySelector(".deleteAll");


if(formulaire !=null) {
    formulaire.addEventListener("submit", onContactFormSubmit);
}
if(newContact !=null) {
    newContact.addEventListener("click", onNewContactClick);
}
if(deleteAll !=null) {
    deleteAll.addEventListener("click", onDeleteAllClick);
}
