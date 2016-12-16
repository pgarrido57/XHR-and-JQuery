var outputDiv = document.getElementById("output-Div");
var buttonEl = document.getElementById("button");
var html = "";


var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", loadMessages);
myRequest.open("GET", "messages.json");
myRequest.send();

function loadMessages(XHRloadEvent) {

// Store parsed JSON
var data = JSON.parse(XHRloadEvent.target.responseText);
// Store array of messages
var messageList = data.messages;
console.log("Test XHRloadEvent", data);

// console.log("mesages 1", messages[0]);
// console.log("mesages 2", messages[1]);
// console.log("mesages 3", messages[2]);

// Loop through message array and build html strings
outputMessages(messageList);

// Then output the html to the DOM
outputDiv.innerHTML = html;

};


buttonEl.addEventListener("click", function () {


  var myRequest2 = new XMLHttpRequest();
  myRequest2.addEventListener("load", loadMoreMessages);
  myRequest2.open("GET", "messages2.json");
  myRequest2.send();


});


function loadMoreMessages (XHRloadEvent){

  var data = JSON.parse(XHRloadEvent.target.responseText);
  var messageList = data.messages;


    for (var i = 0; i < messageList.length; i++) {
      var currentMessage = messageList[i];
      html += "<div>";
      html +=  "Sender is: " + currentMessage.sender;
      html += ", Message is: " + currentMessage.message;
      html += "</div>";
};
outputDiv.innerHTML = html;
};

function outputMessages (list){
  for (var i = 0; i < list.length; i++) {
      var currentMessage = list[i];
      html += "<div>";
      html +=  "Sender is: " + currentMessage.sender;
      html += ", Message is: " + currentMessage.message;
      html += "</div>";
  };
};
