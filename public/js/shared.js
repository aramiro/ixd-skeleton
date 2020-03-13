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
  };
}

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("userInput").value;
  var timeInput = document.getElementById("userTime");
  var time = new Date(timeInput.value);
  var input = inputValue + " @ " + time.toDateString() + " " + time.toLocaleTimeString();
  var t = document.createTextNode(input);
  li.appendChild(t);
  if (inputValue === "" || timeInput.value === "") {
    Swal.fire("Error!", "You must type something!", "error");
  } else {
    document.getElementById("sharedItems").appendChild(li);
  }
  document.getElementById("userInput").value = "";
  document.getElementById("userTime").value = "";
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }

  var shared = JSON.parse(localStorage.getItem("shared"));

  shared.push(input);
  console.log(shared);
  localStorage.setItem("shared", JSON.stringify(shared));

  /*$.getJSON("/data/data.json", function(json) {
    myjson = json;

    for (user in myjson.users) {
      if (myjson.users[user].username == userSearch) {
        if (psw == myjson.users[user].password) {
          localStorage.setItem("firstname", myjson.users[user].firstname);
          localStorage.setItem("index", user);
          found = true;

        } 
      }
    }
    

  });*/
}

/*function populate() {
  var shared = JSON.parse(localStorage.getItem("shared"));
  if(shared.length == 0){

  }
  for (item in shared) {
    console.log(item);
  }

}

$(document).ready(function() {
  populate();
});
*/
