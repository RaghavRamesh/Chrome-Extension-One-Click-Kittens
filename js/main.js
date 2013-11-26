
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

// HTML notification - deprecated I think
// var notification = webkitNotifications.createHTMLNotification(
// 	'pages/notification.html'
// );

// Text notification
var notification = webkitNotifications.createNotification(
	'img/icon.png',
	'Hey there!',
	'Thank you for subscribing for OCK!'
);

notification.show();