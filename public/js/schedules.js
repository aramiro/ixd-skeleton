document.addEventListener("DOMContentLoaded", function() {
  var indCalendarE1 = document.getElementById("calendar");
  var groupCalendarE1 = document.getElementById("calendar2");

  var icalendar = new FullCalendar.Calendar(indCalendarE1, {
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
    themeSystem: "standard",
    googleCalendarApiKey: "AIzaSyD_OFNIKMzCwC7ZotObECp4sUNZ7hH-iv0",
    defaultView: "dayGridMonth",
    header: {
      left: "title",
      right: "prev,next",
    },
    footer: {
		left: "today",
		center:"",
		right: "dayGridMonth,timeGridWeek,timeGridDay"	},
    events: {
      googleCalendarId:
		"ucsd.edu_87nar99a1vmecvl0g75e4ubs4s@group.calendar.google.com"
    },
    eventColor:'lavender',
    dateClick: function(info) {
      //alert('Clicked on: ' + info.dateStr);
      //alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
      //alert('Current view: ' + info.view.type);
      // change the day's background color just for fun
      info.dayEl.style.backgroundColor = "red";

      $("#popup").css("display", "block");
    },
    eventClick: function(info, $el) {
      info.jsEvent.preventDefault(); // don't let the browser navigate

    /*  var modal = document.getElementById("nudgeModal");
      var span = document.getElementsByClassName("close")[0];
      var cancel = document.getElementById("close");
      var nudge = document.getElementById("nudge");

      modal.style.display = "block";

      span.onclick = function() {
        modal.style.display = "none";
      };
      cancel.onclick = function() {
        modal.style.display = "none";
      };

      nudge.onclick = function() {
        document.getElementById("nudge-title").innerHTML = "Nudge Sent!";
      };
      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };*/
      // change the border color just for fun

    
      info.el.style.borderColor = "red";
    },


/*    eventRender: function(eventObj, $el) {
      $el.popover({
        title: eventObj.title,
        content: eventObj.description,
        trigger: 'hover',
        placement: 'top',
        container: 'body'
      });
    }
    */
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
    contentHeight: 500,
    themeSystem: "standard",
    googleCalendarApiKey: "AIzaSyD_OFNIKMzCwC7ZotObECp4sUNZ7hH-iv0",
    defaultView: "dayGridMonth",
    header: {
	  left: "title",
	  center: "",
	  right:"prev,next",
	},
	footer: {
		left: "today",
		right: "dayGridMonth,timeGridWeek,timeGridDay"
	},
    events: {
      googleCalendarId:
        "ucsd.edu_dfuugi6lj86saaqjrnkfgdfd6s@group.calendar.google.com"
    },
    eventColor:'lavender',
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
      var cancel = document.getElementById("closebtn");
      var nudge = document.getElementById("nudge");
      modal.style.display = "block";

      span.onclick = function() {
        modal.style.display = "none";
      };
      cancel.onclick = function() {
        modal.style.display = "none";
      };

      nudge.onclick = function() {
        modal.style.display = "none";
        $("#nudgeModalafter").css("display", "block");
      };
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
  gcalendar.setOption('Height', 650);

  icalendar.render();
  icalendar.setOption('Height', 650);
  gcalendar.render();
});

