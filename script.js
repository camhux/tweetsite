var clientcount = 1;
//var adderButton = document.getElementById("adder");
//var removerButton = document.getElementById("remover");
//var dropdown = document.getElementsByClassName("dropdown");
var clientfields = document.getElementsByClassName("clientfield");
var bodyTemplate = document.getElementById("template");
var adderButton = document.getElementById("clientadd");

adderButton.addEventListener("click", function() {
	addClient();
});

function ClientField(clId) {
   this.bodyContent = document.getElementById("template").cloneNode(true);
   this.id = clId;
   this.bodyContent.id = clId;
   this.bodyContent.querySelector(".title").textContent = "Client " + String(clId);
   this.bodyContent.addEventListener("input", function(event) {
		event.target.nextSibling.textContent = event.target.value.length;
		(event.target.value.length > 140) ? event.target.style.color = "red" : event.target.style.color = "";
	});
   this.bodyContent.querySelector(".dropdown").addEventListener("change", function(event) {
   		if (event.target.value == 5)
   			event.target.parentNode.querySelector("[data-seq='2']").setAttribute("hidden", null);
   		else event.target.parentNode.querySelector("[data-seq='2']").removeAttribute("hidden");
   		event.stopPropagation();
   });
   this.bodyContent.querySelector(".dropdown").addEventListener("input", function(event){
   	event.stopPropagation();
   });
}

function addClient() {
	var newElt = new ClientField(clientcount);
	newElt.bodyContent.removeAttribute("hidden");
	document.body.appendChild(newElt.bodyContent);
	clientcount++;
}

addClient();
/*
function addTweet() {
	var newElt = template.cloneNode(true);
	newElt.id = "tw" + String(divcount);
	newElt.removeAttribute("hidden")
	newElt.addEventListener("input", function(event) {
		event.target.nextSibling.textContent = event.target.value.length;
		(event.target.value.length > 140) ? event.target.style.color = "red" : event.target.style.color = "";
	});
	clientfields[0].insertBefore(newElt);
	divcount++;
};


function removeTweet() {
	var last = document.getElementById("tw" + (divcount - 1));
	var lastText = last.querySelector(".tweet").value;
	var conf;
	if (lastText.length > 0) conf = confirm("Remove tweet " + divcount + "? Content will be lost!");
	else conf = true;
	if (conf === true) {
	last.parentNode.removeChild(last);
	divcount--;
	}
}

adderButton.addEventListener("click", function() {
	addTweet();
	dropdown.value = divcount;
});
removerButton.addEventListener("click", function() {
	removeTweet();
	dropdown.value = divcount;
});
*/
