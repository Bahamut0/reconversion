"use script";

var navContact= document.querySelector(".navContact");
displayContact();

function addContact(nouveauContact){
		var contacts= loadContacts();
		contacts.push(nouveauContact);
		saveContact(contacts);
		displayContact();

}
function displayContact(){

	navContact.innerHTML="";
	var contacts= loadContacts();
		contacts.forEach(function(contact, i){
		var a= document.createElement("a");
		a.setAttribute("data-index", i );
		a.setAttribute("href",  "#");
		a.innerHTML= contact.lastname+ " "+ contact.firstname +' <i class="fas fa-times-circle iconeDelete"></i>';
		if(a != null && navContact != null) {

			navContact.appendChild(a);
			a.addEventListener("click", onContactClick);

			var iconeDelete= document.getElementsByClassName("iconeDelete");
			if(iconeDelete !=null) {
				for(var i=0; i<iconeDelete.length; i++) {
					iconeDelete[i].addEventListener("click", onIconeDeleteClick);
				}
			}

		}

	});
}
function saveContact(contacts){
	localStorage.setItem('contacts', JSON.stringify(contacts));

}
function loadContacts(){

	var recuperation= JSON.parse(localStorage.getItem('contacts'));

	if(recuperation==null){
		return [];
	}
	return recuperation;

}

