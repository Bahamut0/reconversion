var contactList=[];
var navContact= document.querySelector(".navContact"); 

function addContact(nouveauContact){

	contactList.push(nouveauContact);
	displayContact();

}
function displayContact(){
	navContact.innerHTML=" ";
	contactList.forEach(function(contact, i){
		var a= document.createElement("a");
		a.setAttribute("data-index", i );
		a.innerHTML= contact.lastname+ " "+ contact.firstname;
		navContact.appendChild(a);

	});
}