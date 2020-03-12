// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}


// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("userInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("sharedItems").appendChild(li);
  }
  document.getElementById("userInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
  localStorage.setItem("item", t);

  /*$.getJSON("/data/data.json", function(json) {
    myjson = json;
    for (user in myjson.users) {
      if (myjson.users[user].username == userSearch) {
        if (psw == myjson.users[user].password) {
          localStorage.setItem("firstname", myjson.users[user].firstname);
          localStorage.setItem("index", user);
          found = true;
          window.location.replace("/index");
          Toast.fire({
            icon: "success",
            title: "Signed in successfully"
          });
        } 
      }
    }
    

  });*/
}


function populate() {
  var t = localStorage.getItem("item");
  var li = document.createElement("li");
  li.appendChild(t);
}

