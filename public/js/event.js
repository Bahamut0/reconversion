"use script";

var form=document.querySelector("#form_address_book");

function onContactFormSubmit(event){

	event.preventDefault();
	var lastname=this.querySelector("input[name=nom]").value;
	var firstname=this.elements.prenom.value;
	var tel=this.elements.tel.value;
	var contact= {
		lastname:lastname,
		firstname:firstname,
		tel:tel
	};
	
	if(form.dataset.mode=="edition"){
		var contacts= loadContacts();
		var dataIndex= this.dataset.index;
		contacts[dataIndex]= contact;
		saveContact(contacts);
		displayContact();

	}
	else{
		if(!contact.lastname=="" && !contact.firstname=="" && !contact.tel=="" ){
			addContact(contact);
		}
		else if(contact.lastname==""){
			var divNom= document.querySelector(".divNom");
			divNom.classList.remove("hide");
			divNom.innerHTML= "<p>Il manque le nom de famille</p> "; 
		}

	}
}

function onContactClick(event){

	event.preventDefault();
	var allA= document.querySelectorAll("#address_book a");
	var dataIndex= this.dataset.index;
	var contacts= loadContacts();
	var contact= contacts[dataIndex];
	var section= document.querySelector("#address_book section");

	//afficher sur la page les infos du contact
	section.innerHTML= "<p>Nom : "+contact.lastname+ "</p><p>Prénom :" + contact.firstname+ "</p><p>Tel : "+ contact.tel+"</p>";
	form.dataset.mode="edition";
	form.dataset.index=dataIndex;
	var buttonEnvoi= document.querySelector("#envoi");
	buttonEnvoi.innerHTML=" Modifier ";

	/*intégrer les données du contact dans les input : */
	var lastname=document.querySelector("input[name=nom]");
	var firstname=document.querySelector("input[name=prenom]");
	var tel=document.querySelector("input[name=tel]");
	lastname.value= contact.lastname;
	firstname.value= contact.firstname;
	tel.value= contact.tel;


	/*Retirer la class active de tous les liens "a" sauf celui cliqué*/
	for(let i=0; i<allA.length; i++){

		allA[i].classList.remove("active");

			};
	this.classList.add("active");

}

function onNewContactClick(){

	form.dataset.mode="add";
	delete form.dataset.index;
	form.classList.remove("active");
	var buttonEnvoi= document.querySelector("#envoi");
	buttonEnvoi.innerHTML=" Ajouter ";

}
function contentNull() {
	var section= document.querySelector("#address_book section");
	var lastname=document.querySelector("input[name=nom]");
	var firstname=document.querySelector("input[name=prenom]");
	var tel=document.querySelector("input[name=tel]");
	lastname.value= null;
	firstname.value= null;
	tel.value= null;
	section.innerHTML="";
}
function onDeleteAllClick(e){

	e.preventDefault();
	localStorage.clear();
	contentNull();
	displayContact();
}
function onIconeDeleteClick(e){

	e.preventDefault();
	var dataIndex= this.parentElement.dataset.index;
	var contacts= loadContacts();
	contacts.splice(dataIndex, 1);
	saveContact(contacts);
	delete form.dataset.index;
	contentNull();
	displayContact();
}