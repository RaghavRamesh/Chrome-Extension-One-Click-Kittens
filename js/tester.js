var contextClick = function(){
	alert("Thank you for clicking ockittens!");
};

chrome.contextMenus.create({
	"type": "normal",
	"id": "ockittens_context",
	"title": "One Click Kittens",
	"onclick": contextClick,
}, function() {
	console.log("ockittens_context was created!");
});

