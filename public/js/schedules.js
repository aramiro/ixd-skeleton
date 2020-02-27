document.addEventListener("DOMContentLoaded", function() {
  var indCalendarEl = document.getElementById("calendar");
  var groupCalendarE1 = document.getElementById("calendar2");

  var icalendar = new FullCalendar.Calendar(indCalendarEl, {
    plugins: [
      "interaction",
      "dayGrid",
      "timeGrid",
      "list",
      "bootstrap",
      "googleCalendar"
    ],
	editable: true,
	droppable: true,
	contentHeight: 500,
    googleCalendarApiKey: "AIzaSyD_OFNIKMzCwC7ZotObECp4sUNZ7hH-iv0",
    defaultView: "dayGridMonth",
    defaultDate: "2020-02-07",
    header: {
      left: "prev,next today",
      center: "title",
      right: "dayGridMonth,timeGridWeek,timeGridDay"
    },
    events: {
      googleCalendarId:
        "ucsd.edu_87nar99a1vmecvl0g75e4ubs4s@group.calendar.google.com"
    },
    dateClick: function(info) {
      //alert('Clicked on: ' + info.dateStr);
      //alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
      //alert('Current view: ' + info.view.type);
      // change the day's background color just for fun
      info.dayEl.style.backgroundColor = "red";

      $("#popup").css("display", "block");
    },
    eventClick: function(info) {
		info.jsEvent.preventDefault(); // don't let the browser navigate
  
		var modal = document.getElementById("nudgeModal");
		var span = document.getElementsByClassName("close")[0];
		var cancel = document.getElementById("close");
		var nudge = document.getElementById("nudge");

		modal.style.display = "block";
  
		span.onclick = function() {
		  modal.style.display = "none";
		};
		cancel.onclick = function(){
			modal.style.display = "none";
		}

		nudge.onclick = function() {
			alert("nudge sent");
			modal.style.display = "none"
		}
		// When the user clicks anywhere outside of the modal, close it
		window.onclick = function(event) {
		  if (event.target == modal) {
			modal.style.display = "none";
		  }
		};
		// change the border color just for fun
		info.el.style.borderColor = "red";
	  }
  });

  var gcalendar = new FullCalendar.Calendar(groupCalendarE1, {
    plugins: [
      "interaction",
      "dayGrid",
      "timeGrid",
      "list",
      "bootstrap",
      "googleCalendar"
    ],
	editable: true,
	droppable: true,
    googleCalendarApiKey: "AIzaSyD_OFNIKMzCwC7ZotObECp4sUNZ7hH-iv0",
    defaultView: "dayGridMonth",
    defaultDate: "2020-02-07",
    header: {
      left: "prev,next today",
      center: "title",
      right: "dayGridMonth,timeGridWeek,timeGridDay"
    },
    events: {
      googleCalendarId:
        "ucsd.edu_dfuugi6lj86saaqjrnkfgdfd6s@group.calendar.google.com"
    },
    dateClick: function(info) {
      //alert('Clicked on: ' + info.dateStr);
      //alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
      //alert('Current view: ' + info.view.type);
      // change the day's background color just for fun
      info.dayEl.style.backgroundColor = "red";

      $("#popup").css("display", "block");
    },
    eventClick: function(info) {
		info.jsEvent.preventDefault(); // don't let the browser navigate
  
		var modal = document.getElementById("nudgeModal");
		var span = document.getElementsByClassName("close")[0];
		var cancel = document.getElementById("close");
		var nudge = document.getElementById("nudge");
		modal.style.display = "block";

		span.onclick = function() {
		  modal.style.display = "none";
		};
		cancel.onclick = function(){
			modal.style.display = "none";
		}

		nudge.onclick = function() {
			alert("nudge sent");
			modal.style.display = "none"
		}
		// When the user clicks anywhere outside of the modal, close it
		window.onclick = function(event) {
		  if (event.target == modal) {
			modal.style.display = "none";
		  }
		};
		// change the border color just for fun
		info.el.style.borderColor = "red";
	  }
  });

  icalendar.render();
  gcalendar.render();
});
