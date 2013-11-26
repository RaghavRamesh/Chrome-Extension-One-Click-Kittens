
// function that is called after on clicking the contextMenu
var contextClick = function(){
	alert("Thank you for clicking ockittens!");
};

// create a contextMenu item
chrome.contextMenus.create({
	"type": "normal",
	"id": "ockittens_context",
	"title": "One Click Kittens",
	"onclick": contextClick,
}, function() {
	console.log("ockittens_context was created!");
});

